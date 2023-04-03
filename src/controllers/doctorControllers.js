import doctorServices from "../services/doctorServises.js";

async function signUp(req,res){

    const { name, email, password, specialty } = req.body

    try {

        await doctorServices.signUp({name,email,password,specialty});

        res.sendStatus(201);
        
    } catch (error) {
        res.status(error.status || 500).send(error.message);
    }
}

async function signIn(req,res){

    const { email, password } = req.body

    try {
        
        const token = await doctorServices.signIn({ email, password })

        res.send(token)


    } catch (error) {
        res.status(error.status).send(error.message)
    }
}


export default { signUp, signIn }