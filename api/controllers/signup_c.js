class SignUp_c{
    constructor(){
        this.signup_m=new (require('../models/signup_m'));
    }

    async createUser(req, res){
        try {
            const result=await this.signup_m.createUser(req.body);
            if(!result) res.status(500).send({status:"false", message:"User Creation Failed"});
            res.status(200).send(result)
        } catch (error) {
            res.status(500).send({status:"false", message:"Unknown Error Occurred while creating User."})
        }
    }
}

module.exports=SignUp_c;