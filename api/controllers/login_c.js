class Login_c {
    constructor(){
        this.signup_m = new (require('../models/signup_m'));
    }

    async loginUser(req, res){
        try {
            const { PhoneNumber, Password } = req.body;

            // Validate input
            if (!PhoneNumber || !Password) {
                return res.status(400).send({ status: "false", message: "Phone Number and Password are required." });
            }

            const result = await this.signup_m.verifyUserCredentials(PhoneNumber, Password);

            if (!result.status) {
                return res.status(401).send(result); // Unauthorized
            }

            res.status(200).send({ status: "true", message: "Login Successful", data: result.user });
        } catch (error) {
            res.status(500).send({ status: "false", message: "Unknown Error Occurred while logging in." });
        }
    }
}

module.exports = Login_c;
