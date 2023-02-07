const User = require ("../models/user.model")


// login
const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } })
  .then((user) => {
    if (!user) return res.sendStatus(401);

    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        id: user.id,
        name: user.username,
        lastname: user.fullname,
        email: user.email,
      };

      // const token = generateToken(payload); //
      // console.log(token);
      // res.cookie("token", token);

      res.send(payload); //
    });
  });
};


//valida si hay un usuario logueado, pedido de validar token
const validation = (req, res) => {
  console.log(req.user);
  res.send(req.user);
};

// perfil de usuario una vez que entro
const perfilUsuario = (req, res) => {  
  res.send(req.user);
}


// logout
const logout = (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
};


module.exports = { login, validation, logout, perfilUsuario}