function validateSchema(schema){
    return (req,res,next) => { 

        console.log( "chegou no validate")

        const { error } = schema.validate(req.body, { abortEarly: false })

        if( error ){
            const errors = error.details.map((detail) => detail.message);

            return res.status(409).send(errors)
        }

        next()
    }
}


export default validateSchema