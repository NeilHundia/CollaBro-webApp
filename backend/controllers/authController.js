const bcrypt = require('bcrypt');
const UserModel = require("../models/User");
const jwt = require('jsonwebtoken');


const signup = async(req,res)=>{
    try{
        const {fullName,username,email,password,mobile} = req.body;
        const existuser = await UserModel.findOne({ email });

        if(existuser){
            return res.status(409).json({message:"user is already existing , you can login ", success :false});
        }

        const newUser = new UserModel({ fullName , username , email, password , mobile });
        newUser.password = await bcrypt.hash(password,10);
        console.log("New User Data:", newUser);

        await newUser.save()
            .then(() => {
                console.log("User saved to the database");
            })
            .catch((err) => {
                console.error("Error saving user:", err);
            });
        res.status(201)
            .json({message:"Signup successful",success:true

            })
    }
    catch (err){
        res.status(500)
            .json({message:"Internal server error",success:false

            })
    }
}

const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const existuser = await UserModel.findOne({ email });
        const errorMsg = 'Auth failed email or password is incorrect';
        if(!existuser){
            return res.status(409)
            .json({message:errorMsg,success :false});
        }
        const isPassEqual = await bcrypt.compare(password, existuser.password);
        if(!isPassEqual){
            return res.status(409)
            .json({message:errorMsg,success :false});
        }
        const jwtToken = jwt.sign(
            {email: existuser.email, _id: existuser.id},
            process.env.JWT_SECRET,
            {expiresIn:'24h'}
        )
        res.status(200)
            .json({message:"Login successful",
                success:true,
                jwtToken,
                email,
                name:existuser.name

            })
    }
    catch (err){
        res.status(500)
            .json({message:"Internal server error",success:false

            })
    }
}


module.exports = {
    signup,
    login
}