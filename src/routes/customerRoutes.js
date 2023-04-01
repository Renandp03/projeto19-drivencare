import { Router } from "express";
import customerControllers from "../controllers/customerControllers.js";

const customerRoutes = Router()

customerRoutes.post("/customers/sign-up",customerControllers.signUp)
customerRoutes.post("/customers/sign-in",customerControllers.signIn)

export default customerRoutes