import doctorRepositores from "../repositores/doctorRepositores.js";
import errors from "../error/error.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"


async function signUp({name,email,password}){

   const { rowCount } = await doctorRepositores.findByEmail(email);

   if(rowCount) throw errors.conflictError("email already exists") ;

   const hashPassword = await bcrypt.hash(password,10);

   await doctorRepositores.create({name,email,password:hashPassword,specialty});

}

async function signIn({email,password}){

   const { rowCount, rows:[user] } = await doctorRepositores.findByEmail(email)
   if(!rowCount) throw errors.invalidCredentials()

   const validatePassword = await bcrypt.compare(password,user.password)
   if(!validatePassword) throw errors.invalidCredentials()

   const token = jwt.sign({user_id:user.id},process.env.SECRET_KEY)

   return token
}


export default { signUp, signIn }