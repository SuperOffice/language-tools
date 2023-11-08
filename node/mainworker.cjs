const http = require('http');
const path = require('path');
const vm = require('vm');

const __bundleDir = path.format({dir: __dirname, base: 'bundle'});
const { RTL, CS_RTL, _internal } = require(path.format({dir: __bundleDir, base: 'RTL.js'}));

const port = 8080;

const server = http.createServer(async (req, res) => {
  const requestPath = req.url.split("/");
  const requestUrl = req.url;
  let operation = "";
  if (requestPath.length > 1)
    operation = requestPath[1];

  if (operation === "healthz") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write("ok");
    res.end();
  }
  else if (operation === "script") {
    //module.paths.push("C:\\git\\FileSet\\Modules\\CrmScript\\Source\\SuperOffice.CRMScript.RTE\\custom\\node_modules"); // TODO: Should point to tenant area, or script specific area?
    const dataAsJson = await readHttpRequest(req);
    const apiEndpoint = req.headers["x-apiendpoint"];
    const accessToken = req.headers["x-accesstoken"];
    initSession(req);
  
    const executeResponse = await execute(dataAsJson, apiEndpoint, accessToken);

    outputJsonToResponse(res, executeResponse.out, executeResponse.statusCode);
    res.end(() => {
      process.exit();
    });
  }
  else if (operation === "verify") {
    const dataAsJson = await readHttpRequest(req);

    var out = {};

    try {
      const script = new vm.Script("(async () => {" + dataAsJson.scriptbody + "\n})()");

      out.success = true;
      out.validationInfo = {
        message: "",
        lineNumber: -1,
        characterNumber: -1
      };
    }
    catch (error) {
      const errInfo = getError(error.stack);

      out.success = false;
      out.validationInfo = {
        message: error.toString(),
        lineNumber: errInfo.line+1,
        characterNumber: 0
      }
    }
    
    outputJsonToResponse(res, out, 200);
    res.end();
  }
  else {
    res.statusCode = 404;

    const opNotFound = "Operation not found: " + requestUrl;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Content-Length', opNotFound.length)
    res.write(opNotFound);
    res.end();
  }
});

server.listen(port, () => {
  console.log("Started");
});
  
async function readHttpRequest(req) {
  const buffers = [];
  for await (const chunk of req) {
      buffers.push(chunk);
  }

  const data = Buffer.concat(buffers).toString();
  const dataAsJson = JSON.parse(data);
  return dataAsJson;
}

async function execute(dataAsJson, apiEndpoint, accessToken) {
  const context = {
    result: {
        body: "",
        status: 200
    },
    vars: {},
    funcs: {},
    variables: dataAsJson.parameters,
    eventData: dataAsJson.eventData
  };

  const api = apiEndpoint? new RTL.WebApi(apiEndpoint) : "";
  if (api)
    api.authenticateWithToken(accessToken);

  var out;
  var statusCode = 200;
  try {
    _internal.tracing.startTrace();

    const evalResult = await eval("(async () => {\ndebugger;\n" + dataAsJson.scriptbody + "\n})()");

    _internal.tracing.endTrace();

    out = {
      result: context.result.body,
      variables: context.variables,
      eventData: context.eventData,
      traceRun: _internal.tracing.getTrace()
    };
    if (out.eventData)
      out.eventData.cgiContent = null; // No need to transfer potential big payload back
  }
  catch (error) {
    console.log(error);
    const errInfo = getError(error.stack);

    out = {
      runtimeError: {
          message: error.toString(),
          lineNumber: errInfo.line,
          characterNumber: errInfo.char
      }
    };

    statusCode = 400;
  }

  return {out, statusCode};
}

function outputJsonToResponse(res, output, statusCode) {
    const responseString = JSON.stringify(output);

    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Content-Length', Buffer.byteLength(responseString, 'utf8'));
    res.statusCode = statusCode;
    res.write(responseString);
    res.write("");
}

function getError(s) {
  let retVal = {line: -1, char: -1};
  const searchString = "<anonymous>:";
  const pos = s.indexOf(searchString);
  if (pos >= 0) {
      const vals = s.substring(pos + searchString.length);
      const splitted = vals.split(":");
      if (splitted.length > 1) {
          retVal.line = parseInt(splitted[0]);
          retVal.char = parseInt(splitted[1]);
      }
  }

  return retVal;
}

function initSession(request) {
  if (process.env["OS"] === "Windows_NT") // We need the env variables on Windows
    return;

  Object.keys(process.env).forEach(function(key) {
    delete process.env[key];
  });
}
