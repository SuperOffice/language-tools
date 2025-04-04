export const NSForeignSystemAgent = `/** 
Collection of all services that works with Foreign key data (Key/Value pairs)
*/
class NSForeignSystemAgent {
    /** 
    Adds a new NSForeignDevice with deviceName that belongs to the application with applicationName, with an optional device-specific identifier.
    */
    NSForeignDevice AddDeviceByIdentifier(String applicationName, String deviceName, String deviceIdentifier);
    /** 
    Adds a new key belonging to the ForeignApp and NSForeignDevice specified.
    */
    NSForeignKey AddForeignKey(NSForeignKey foreignKey, String applicationName, String deviceName, String deviceIdentifier);
    /** 
    Sets default values into a new NSForeignAppEntity.
    */
    NSForeignAppEntity CreateDefaultForeignAppEntity();
    /** 
    Deletes an NSForeignDevice with deviceName and deviceIdentifier that belongs to the application with applicationName.
    */
    Void DeleteDeviceByIdentifier(String applicationName, String deviceName, String deviceIdentifier);
    /** 
    Deletes the NSForeignAppEntity
    */
    Void DeleteForeignAppEntity(Integer foreignAppEntity);
    /** 
    Deletes a foreign device from an application
    */
    Void DeleteForeignDevice(NSForeignDevice foreignDevice, String applicationName);
    /** 
    Deletes all specified occurrences of a key, belonging to the ForeignApp and NSForeignDevice, table and record specified. Specifying a blank table name will delete ALL keys of the given name; specifying a recordID of 0 will delete ALL keys of the given name for the given table.
    */
    Void DeleteForeignKey(NSForeignKey foreignKey, String applicationName, String deviceName, String deviceIdentifier, String tableName, Integer recordId);
    /** 
    Deletes all specified occurrences of a key, belonging to the ForeignApp and NSForeignDevice, table and record specified. Specifying a blank table name will delete ALL keys of the given name; specifying a recordID of 0 will delete ALL keys of the given name for the given table.
    */
    Void DeleteForeignKeyOnName(String applicationName, String deviceName, String deviceIdentifier, String keyName, String tableName, Integer recordId);
    /** 
    Gets a list of foreignkeys ('app.device.key') and their values ('123') that belong to the specified entity.
    */
    Map GetAllForeignKeysOnEntity(String entityType, Integer entityId);
    /** 
    Gets the ForeignApp with the given name.
    */
    NSForeignAppEntity GetAppByName(String applicationName);
    /** 
    Gets all devices that belong to a foreign application.
    */
    NSForeignDevice[] GetApplicationDevices(String applicationName);
    /** 
    Returns all ForeignKeys that belong to an application.
    */
    NSForeignKey[] GetApplicationKeys(String applicationName);
    /** 
    Gets an NSForeignDevice with deviceName and deviceIdentifier that belongs to the application with applicationName.
    */
    NSForeignDevice GetDeviceByIdentifier(String applicationName, String deviceName, String deviceIdentifier);
    /** 
    Gets an NSForeignDevice with deviceName that belongs to the application with applicationName.
    */
    NSForeignDevice GetDeviceByName(String applicationName, String deviceName);
    /** 
    Returns all ForeignKeys that belong to a device.
    */
    NSForeignKey[] GetDeviceKeys(String applicationName, String deviceName);
    /** 
    Returns all ForeignKeys that belong to a device with a given deviceIdentifier.
    */
    NSForeignKey[] GetDeviceKeysOnDeviceIdentifier(String applicationName, String deviceName, String deviceIdentifier);
    /** 
    Returns all ForeignKeys that belong to a device with a given deviceIdentifier and table name.
    */
    NSForeignKey[] GetDeviceKeysOnDeviceIdentifierTable(String applicationName, String deviceName, String deviceIdentifier, String tableName);
    /** 
    Returns all ForeignKeys that belong to a device with a given deviceIdentifier and table name, as well as record id.
    */
    NSForeignKey[] GetDeviceKeysOnDeviceIdentifierTableRecordId(String applicationName, String deviceName, String deviceIdentifier, String tableName, Integer recordId);
    /** 
    Gets an NSForeignAppEntity object.
    */
    NSForeignAppEntity GetForeignAppEntity(Integer foreignAppEntityId);
    /** 
    Gets an NSForeignDevice object.
    */
    NSForeignDevice GetForeignDevice(Integer foreignDeviceId);
    /** 
    Returns a foreign key by its key name that belongs to the specified device and application. A table name and record ID can also be specified.
    */
    NSForeignKey GetKey(String applicationName, String deviceName, String keyName, String tableName, Integer recordId);
    /** 
    Gets a foreignkey based on its name and value, that belongs to the specified device and application.
    */
    NSForeignKey GetKeyByValue(String applicationName, String deviceName, String keyName, String keyValue, String tableName);
    /** 
    Gets a foreignkey based on its name and value, that belongs to the specified deviceId, device, and application.
    */
    NSForeignKey GetKeyByValueAndIdentifier(String applicationName, String deviceName, String deviceIdentifier, String keyName, String keyValue, String tableName);
    /** 
    Returns a foreign key by its key name and device identifier, that belongs to the specified device and application. A table name and record ID can also be specified.
    */
    NSForeignKey GetKeyOnDeviceIdentifier(String applicationName, String deviceName, String deviceIdentifier, String keyName, String tableName, Integer recordId);
    /** 
    Gets the string value of an NSForeignKey, that belongs to the specified device and application. The table name and record ID must also be specified.
    */
    String GetKeyValue(String applicationName, String deviceName, String keyName, String tableName, Integer recordId);
    /** 
    Returns a foreign key string value by its key name and device identifier, that belongs to the specified device and application. A table name and record ID can also be specified.
    */
    String GetKeyValueOnDeviceIdentifier(String applicationName, String deviceName, String deviceIdentifier, String keyName, String tableName, Integer recordId);
    /** 
    Updates an NSForeignDevice with deviceName that belongs to the application with applicationName.
    */
    NSForeignDevice SaveDeviceByIdentifier(String applicationName, String deviceName, String deviceIdentifier, NSForeignDevice foreignDevice);
    /** 
    yUpdates the existing NSForeignAppEntity or creates a new NSForeignAppEntity if the ID parameter is 0.
    */
    NSForeignAppEntity SaveForeignAppEntity(NSForeignAppEntity foreignAppEntity);
    /** 
    Saves a foreign device for an foreign application
    */
    NSForeignDevice SaveForeignDevice(NSForeignDevice foreignDevice, String applicationName);
    /** 
    Saves a key belonging to the ForeignApp and NSForeignDevice specified.
    */
    NSForeignKey SaveForeignKey(NSForeignKey foreignKey, String applicationName, String deviceName, String deviceIdentifier);
}`;