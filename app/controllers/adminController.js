const dataMapper = require("../dataMapper");

const client = require("../database");

const adminController = {
  /**
   * diaply add student page
   * @param {request} req request object
   * @param {response} res response object
   */
  async getAddStudentForm(req, res) {
    // on vérfie que l'utilisateur s'appelle bien bob
    if (req.session.login !== "bob") {
      res.status(403).send("Vous n'avez pas le droit d'accéder à cette page");
    } else {
      try {
        // on récupére les promos et on génére la page en lui passant les promos pour peupler le selec
        const promos = await dataMapper.findAllPromos();
        res.render("admin/addStudent", { promos });
      } catch (err) {
        res.status(500).send(error.message);
      }
    }
  },
  async addStudent(req, res) {
    try {
      // on ajoute l'étudiant, et on récupére le nombre d'enregistrements ajoutés
      // ici normalement un seul.
      const count = await dataMapper.addStudent(req.body);
      if (count === 1) {
        res.redirect(`/promo/${req.body.promo_id}/students`);
      } else {
        res.status(500).send("Aucun enregistrement créé");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
};

module.exports = adminController;
