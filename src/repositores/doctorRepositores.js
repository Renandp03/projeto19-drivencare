import db from "../config/database.js";


async function findByEmail(email) {
    return await db.query(
      `    
      SELECT * FROM doctors WHERE email=$1
    `,
      [email]
    );
  }

  async function create({ name, email, password }) {
    await db.query(
      `
          INSERT INTO doctors (name, email, password, specialty)
          VALUES ($1, $2, $3, $4)
      `,
      [name, email, password, specialty]
    );
  }

export default { findByEmail, create }