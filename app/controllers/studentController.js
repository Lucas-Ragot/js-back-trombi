const dataMapper = require("../dataMapper");

const studentController = {
  /**
   * Display promo students list page
   * @param {request} req request object
   * @param {response} res response object
   */
  async getStudentsByPromo(req, res, next) {
    // on récupére la valeur de l'id contenu dans la route
    const promoId = Number(req.params.id);
    //on récupére les détails de la promo
    try {
      let promo = await dataMapper.findPromoById(promoId);
      if(promo){
        let students = await dataMapper.findStudentsByPromo(promoId);
        res.render("promoStudents", { promo, students });
      } else {
        next()
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

// on exporte le controller
module.exports = studentController;
