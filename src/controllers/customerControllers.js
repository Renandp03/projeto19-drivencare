import customerServices from "../services/customerServices.js"

async function signUp(req,res){

    const { name, email, password } = req.body

    try {

        await customerServices.signUp({name,email,password})

        res.sendStatus(201)
        
    } catch (error) {
        res.status(error.status).send(error.message)
    }
}

async function signIn(req,res){

    const { email, password } = req.body

    try {
        
        const token = await customerServices.signIn({ email, password })

        res.send(token)


    } catch (error) {
        res.status(500).send(error.message)
    }
}


export default { signUp, signIn }