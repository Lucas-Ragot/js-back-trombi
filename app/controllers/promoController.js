const dataMapper = require("../dataMapper");
const promoController = {
  /**
   * Display promos list page
   * @param {request} req request object
   * @param {response} res response object
   */
  async getPromosList(req, res) {
    try {
      const promos = await dataMapper.findAllPromos();
      res.render("promos", { promos });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  /**
   * Display promo details page
   * @param {request} req request object
   * @param {response} res response objet
   * @param {function} next next function
   */
  async getPromoDetails(req, res, next) {
    // on récupére la valeur de l'id contenu dans la route
    const promoId = req.params.id;
    try {
      const promo = await dataMapper.findPromoById(promoId);
      if (promo) {
        res.render("promoDetails", { promo });
      } else {
        next();
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
};

// on exporte le controller
module.exports = promoController;
