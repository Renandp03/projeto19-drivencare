import db from "../config/database.js";


async function findByEmail(email) {
    return await db.query(
      `    
      SELECT * FROM doctors WHERE email=$1
    `,
      [email]
    );
  }

  async function create({ name, email, password, specialty }) {
    await db.query(
      `
          INSERT INTO doctors (name, email, password, specialty)
          VALUES ($1, $2, $3, $4)
      `,
      [name, email, password, specialty]
    );
  }

  async function findBySpecialty(specialty){
    return await db.query(
      `
      SELECT * FROM specialtys WHERE name = $1
      `,
    [specialty])
  }

  async function createSpecialty(specialty){
    return await db.query(
      `
      INSERT INTO specialtys (name) VALUES ($1)
      `,
      [specialty]
    )
  }

export default { findByEmail, create, findBySpecialty, createSpecialty }