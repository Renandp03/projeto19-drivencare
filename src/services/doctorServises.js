import doctorRepositores from "../repositores/doctorRepositores.js";
import errors from "../error/error.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import "dotenv/config"


async function signUp({name,email,password,specialty}){

   const { rowCount } = await doctorRepositores.findByEmail(email);
   if(rowCount) throw errors.conflictError("email already exists");

   const { rowCount: rowCount2 } = await doctorRepositores.findBySpecialty();

   if(!rowCount2) await doctorRepositores.createSpecialty(specialty);
   
   const { rows: [specialty_id] } = await doctorRepositores.findBySpecialty(specialty);

   const hashPassword = await bcrypt.hash(password,10);

   await doctorRepositores.create({name,email,password:hashPassword,specialty:specialty_id.id});

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