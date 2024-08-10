class SignUp {
    constructor() {
        this.sqlhelper = new (require('../services/dbhelper/index'));
        this.mysql = require('mysql');
    }

    // Existing createUser method...

    // New method to verify user credentials
    async verifyUserCredentials(PhoneNumber, Password) {
        try {
            const query = 'SELECT * FROM `user_master` WHERE `vPhoneNumber` = ? AND `iRecDeleted` = 0;';
            const result = await this.sqlhelper.executeQuery(query, [PhoneNumber]);

            if (result.length === 0) {
                return { status: "false", message: "User does not exist." };
            }

            const user = result[0];

            // Assuming you have stored passwords securely (hashed), compare the stored hash with the provided password
            const passwordMatch = (user.vPassword === Password); // Replace with actual password comparison logic

            if (!passwordMatch) {
                return { status: "false", message: "Incorrect Password." };
            }

            return { status: "true", user: user };
        } catch (error) {
            console.log(error);
            return { status: "false", message: error.message };
        }
    }
}

module.exports = SignUp;
