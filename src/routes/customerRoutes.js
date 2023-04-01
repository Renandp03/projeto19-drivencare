import { Router } from "express";
import customerControllers from "../controllers/customerControllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import signUpSchema from "../schemas/customersSignUpSchema.js"

const customerRoutes = Router()

customerRoutes.post("/customers/sign-up",validateSchema(signUpSchema),customerControllers.signUp)
customerRoutes.post("/customers/sign-in",customerControllers.signIn)

export default customerRoutes