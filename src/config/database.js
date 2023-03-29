import pg from "pg"
import dotenv from "dotenv"

dotenv.config();

const { Pool } = pg;

const configDatabase = new Pool({
    connectionString:process.env.DATABASE_URL,
    ...(process.env.NODE === "production" && {
        ssl:{
            rejectUnauthorized:false
        }
    })
})

const db = new Pool(configDatabase)

export default db