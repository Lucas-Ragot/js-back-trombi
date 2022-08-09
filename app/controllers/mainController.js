const mainController = {
  /**
   * Display home page
   * @param {request} req request object
   * @param {response} res response object
   */
  getHomePage(req, res) {
    res.render("index");
  },
  /**
   * display navigation history page
   * @param {request} req request object
   * @param {response} res response object
   */
  getHistoryPage(req, res) {
    res.render("history", { history: req.session.history });
  },
};

// on exporte le controller
module.exports = mainController;
