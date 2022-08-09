const { Client } = require("pg");

// on crée un nouveau client (en lui passant la chaine de connexion contenu ds le fichier .env
const client = new Client(process.env.PG_URL);

// on se connecte à la base de donnée
client.connect();

module.exports = client;