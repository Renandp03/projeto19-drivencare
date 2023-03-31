import customerRepositores from "../repositores/customerRepositores.js";
import errors from "../error/error.js"
import bcrypt from "bcrypt"

async function signUp({name,email,password}){

   const { rowCount } = await customerRepositores.findByEmail(email);

   if(rowCount) throw errors.conflictError("mensagem") ;

   const hashPassword = await bcrypt.hash(password,10);

   await customerRepositores.create({name,email,password:hashPassword});

}


export default { signUp }