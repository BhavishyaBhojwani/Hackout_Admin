class SignUp{
    constructor(){
        this.sqlhelper=new (require('../services/dbhelper/index'));
        this.mysql=require('mysql');
    }
    
async createUser(data) {
    try { 
        const result = await this.sqlhelper.executeQuery('SELECT * FROM `user_master` WHERE `vPhoneNumber` = ? AND `iRecDeleted` = 0;', [data.PhoneNumber]);        
        if (result.length > 0) return { status: "true", message: "User Already Exists" };
        
        const _query = 'INSERT INTO `user_master` (`vFullName`, `vPhoneNumber`, `eGender`, `iAge`, `iCertificateNumber`, `iRoleId`) VALUES (?, ?, ?, ?, ?, ?)';
        
        const _values = [ data.FullName, data.PhoneNumber, data.Gender, data.Age, data.CertificateNumber, data.RoleId];
        const _result = await this.sqlhelper.executeQuery(_query, _values);
        
        if (_result.affectedRows > 0) return { status: "true", message: "User Created Successfully." };
        
        return { status: "false", message: "User Creation Failed." };
        
        
        
    } catch (error) {
        console.log(error);
        
        return {status:"false", message:error.message}
    }
}

}

module.exports=SignUp;