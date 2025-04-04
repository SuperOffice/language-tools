export const StringMatrix = `/** 
Two-dimensional string array.
*/
class StringMatrix {
    /** 
    Adds a cell to the current row.
    */
    Void addCell(String value);
    /** 
    Adds a row to the matrix.
    */
    Void addRow();
    /** 
    Clears the whole matrix.
    */
    Void clear();
    /** 
    Deletes a row from the matrix.
    */
    Void deleteRow(Integer row);
    /** 
    Returns the value for a given cell.
    */
    String getCell(Integer row, Integer column);
    /** 
    Returns number of columns in a given row
    */
    Integer getNumColumns(Integer row);
    /** 
    Returns the number of rows in the matrix.
    */
    Integer getNumRows();
    /** 
    Sets the value of the specified cell.
    */
    Void setCell(Integer row, Integer column, String value);
}`;