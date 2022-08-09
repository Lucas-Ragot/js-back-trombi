require("dotenv").config();
const client = require("./app/database");

// écrire une fonction asynchrone qui renvoie un éudiant en fonction de son id
async function getStundentById(id) {
  const sql = 'SELECT * FROM "student" WHERE id = $1';
  const results = await client.query(sql, [id]);
  if (results.rows.length) {
    return results.rows[0];
  } else {
    return null
  }
}

// écrire une seconde fonction qui n'est pas asynchrone et qui affiche le nom d'un étudiant en fonstion de son id
function getStudentNameById(id){
  // getStundentById(id).then(student=>{
  //   console.log(student.first_name)
  // })
  const sql = 'SELECT * FROM "student" WHERE id = $1';
  client.query(sql, [id]).then(results=>{
    console.log(results.rows[0].first_name)
  })
}

getStudentNameById(25)