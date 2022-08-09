// on récupére le module dotenv et on charge les variables d'environements
require("dotenv").config();

// on récupére express et le module contenant les routes
const express = require("express");
const router = require("./app/router");
const session = require("express-session");

// on crée l'application express
const app = express();
// on déclare une variable PORT qui prend pour valeur la variable d'environement PORT si elle existe, sinon 5050
const PORT = process.env.PORT || 5050;

// on configure notre application pour qu'elle utilise le moteur de rendu EJS
app.set("view engine", "ejs");
// on configure notre application pour qu'elle cherche les vues dans le dossier ./app/views
app.set("views", "./app/views");

// on met en place le middleware en charge des resources statiques
app.use(express.static("./public"));
// on met enplace le middleware en charge de sessions : http://expressjs.com/en/resources/middleware/session.html
app.use(
  session({
    secret: "J'aime les chocolatines",
    resave: true,
    saveUninitialized: true,
  })
);

// on  met  en place le middleware en charge des données urlenencodées
app.use(express.urlencoded({ extended: true }));

//on met en place en middleware pour stocker l'historique de navigation ds la session de l'utilisateur
app.use((req, res, next) => {
  // si le tableau pour stocker l'historique n'existe pas, on le crée
  if (!req.session.history) {
    req.session.history = [];
  }
  // on ajoute dans le tableau l'url qui est appelée
  req.session.history.push(req.url);
  // on passe au middleware suivant (le router)
  next();
});

// on met en place notre routeur
app.use(router);

// on ajoute un dernier middleware pour la gestion des 404
app.use((req, res) => {
  res.status(404).render("404");
});

// on lance le serveur en précisant le port à utiliser
app.listen(PORT, () => {
  console.log(`server ready, visit http://localhost:${PORT}`);
});
