import db from "../config/database.js";


async function findByEmail(email) {
    return await db.query(
      `    
      SELECT * FROM customers WHERE email=$1
    `,
      [email]
    );
  }

  async function create({ name, email, password }) {
    await db.query(
      `
          INSERT INTO customers (name, email, password)
          VALUES ($1, $2, $3)
      `,
      [name, email, password]
    );
  }

  async function findSpecialty(specialty){

    await db.query(
        `
          SELECT (d.name, s.name)
          FROM doctors d
          JOIN specialtys s 
          ON d.specialty = s.id
          where s.name = $1
        `,
        [specialty]
      ) 
  }


export default { findByEmail, create, findSpecialty }