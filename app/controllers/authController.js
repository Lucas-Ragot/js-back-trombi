const authController = {
  login(req,res){
    const login = req.body.login;
    req.session.login = login;
    res.redirect("/");
  }
}

module.exports = authController