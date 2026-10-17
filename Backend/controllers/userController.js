import userModel from "../models/userModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


// Function to generate arrow token 

const createToken = (id)=>{
  return jwt.sign({id},process.env.JWT_SECRET);
}

//Route for user Login 
const loginUser= async(req,res)=>{

  try {
    const {email,password} =req.body;
    // check user exists 
    const user  = await userModel.findOne({email});

    if(!user){
      return res.json({
        success:false,
        message:"User doesn't exists"
      })
    }
    
    // compare the password with the password stored in db -(user.password)
     const isMatch = await bcrypt.compare(password,user.password);

     if(isMatch){
      const token = createToken(user._id);
      res.json({
        success:true,
        token,
        message:"User login successfully"
      })
     }
     else{
      res.json({
        success:false,
        message:"Invalid credentials"
      })
     }
    

  } catch (error) {
    console.log(error);
    res.json({
      success:false,message:error.message
    })
    
  }

}


// Route for user Registeration 

const registerUser= async (req,res)=>{
  try {
    const {name , email , password} = req.body;

    // validate user email and password 
      if(!validator.isEmail(email)){
        return res.json({
          message:"PLease enter valid email",
          success:false
        })
      }

      if(password.length<6){
        return res.json({
          message:"PLease enter strong password",
          success:false
        }) 
      }

      // check if user already exist 
    const exists = await userModel.findOne({email});

    if(exists){
      return res.json({
        message:"User Already exist with this email",
        success:false
      })
    }

      // Hashing user password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password,salt);

      const newUser = new userModel({
        name,
        email,
        password:hashedPassword
      })

      const user = await newUser.save();

      const token = createToken(user._id);
      res.json({
        success:true,
        token,
        message:"User registered Successfully"
      })
  } catch (error) {
    console.log(error);
    res.json({
      success:false,
      message:error.message
    })
    
    
  }

}


// Route for admin LOgin 
const adminLogin = async(req,res)=>{
  try {
    const {email, password} =req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS){
      const token = jwt.sign(email+password,process.env.JWT_SECRET);
      res.json({
        success:true,
        token
      })
    }
    else{
      res.json({
        success:false,
        message:"Invalid credentials"
      })
    }
  } catch (error) {
     console.log(error);
    res.json({
      success:false,
      message:error.message
    })
    
  }


}


export {loginUser,registerUser,adminLogin};