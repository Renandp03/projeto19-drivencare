import customerServices from "../services/customerServices.js"

async function signUp(req,res){

    const { name, email, password } = req.body

    try {

        customerServices.signUp({name,email,password})

        res.sendStatus(201)
        
    } catch (error) {
        res.status(500).send(error)
    }
}

async function signIn(req,res){

    const { email, password } = req.body

    try {
        


    } catch (error) {
        res.status(500).send(error.message)
    }
}


export default { signUp, signIn }