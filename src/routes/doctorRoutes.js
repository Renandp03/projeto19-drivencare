import { Router } from "express";
import doctorControllers from "../controllers/doctorControllers.js";
import validateSchema from "../middlewares/validateSchema.js"
import signUpSchema from "../schemas/doctorSignUpSchema.js";

const doctorRoutes = Router();

doctorRoutes.post("/doctors/sign-up",validateSchema(signUpSchema),doctorControllers.signUp);
doctorRoutes.post("/doctors/sign-in",doctorControllers.signIn)

export default doctorRoutes