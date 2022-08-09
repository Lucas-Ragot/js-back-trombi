require("dotenv").config();

// on récupére Client du module pg
const { Client } = require("pg");

// on crée un nouveau client (en lui passant la chaine de connexion contenu ds le fichier .env
const client = new Client(process.env.PG_URL);

// on se connecte à la base de donnée
client.connect();

const query =
  `SELECT first_name FROM student ORDER BY last_name ASC`;
  
client.query(query, (error, results) => {
  if (error) {
    console.trace(error);
  } else {
    console.log(results.rows);
  }
});
