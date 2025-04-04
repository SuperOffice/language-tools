export const Category = `/** 
For accessing and changing a ticket category.
*/
class Category {
    /** 
    Retrieves the value of the given field in the category.
    */
    String getValue(String field);
    /** 
    Load object with values from category with given ID.
    */
    Bool load(Integer id);
    /** 
    Saves the category and returns its ID.
    */
    Integer save();
    /** 
    Sets the value of the given field for the category.
    */
    Void setValue(String name, String value);
}`;