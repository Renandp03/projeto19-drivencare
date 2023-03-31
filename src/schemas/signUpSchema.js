import Joi from "joi";

const signUpSchema = Joi.object({
    name:Joi.string().min().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password:Joi.string().required()
})