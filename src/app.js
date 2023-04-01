import express , {json} from "express";
import cors from "cors";
import { routes } from "./routes/routes.js";
import "express-async-errors";

const app = express();

app.use(cors());
app.use(json());
app.use(routes)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server is running in port  ${port}`));