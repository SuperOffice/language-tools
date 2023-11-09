const cluster = require('cluster');
const os = require('os');
const process = require('process');
const path = require('path');

const __bundleDir = path.format({dir: __dirname, base: 'bundle'});
const __nodeModulesDir = path.format({dir: __dirname, base: 'node_modules'});
const __customModulesDir = path.format({dir: __dirname, base: 'custom'});
const __allowedFiles = [];
__allowedFiles.push(path.format({dir: __dirname, base: 'mainworker.cjs'}));
__allowedFiles.push(path.format({dir: __bundleDir, base: 'RTL.js'}));
__allowedFiles.push(path.format({dir: __nodeModulesDir, base: '*'}));
__allowedFiles.push(path.format({dir: __customModulesDir, base: '*'}));

const numCPUs = Math.max(os.availableParallelism()-1, 1);

console.log(`Primary ${process.pid} is running`);

cluster.schedulingPolicy = cluster.SCHED_RR;
cluster.setupPrimary({
  exec: __dirname + "/mainworker.cjs",
  execArgv: ['--experimental-permission'].concat(__allowedFiles.map((x) => "--allow-fs-read=" + x))
});

cluster.on('exit', (worker, code, signal) => {
  const exitCode = signal || code;
  console.log(`worker ${worker.process.pid} died with code ${exitCode}`);
  if (code === 0) // Only fork a new one on successful exit from child process.
    cluster.fork();
  else {
    // TODO: What do we do when there is another exit code?
  }
});

// Fork workers.
for (let i = 0; i < numCPUs; i++) {
  cluster.fork();
}
