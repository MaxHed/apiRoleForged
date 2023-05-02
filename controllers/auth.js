// Importation du package de cryptage des mots de passe
const bcrypt = require("bcrypt");
// Importation du package qui permet de créer et de vérifier les tokens d'authentification
const jwt = require("jsonwebtoken");

const {env: {SECRET_TOKEN}} = process;


module.exports = function ({ User }) {

  const  signup = async (req, res, next) => {
    if (!req.body.mail || !req.body.password) {
      return res.status(400).json({
        error: "Données de création d'utilisateur oubliées !",
      });
    }

    User.findOne({
      where: {
        mail: req.body.mail,
      }
    })
      .then((user) => {
        if (user) {
          return res.status(404).json({
            error: "Un utilisateur avec cette adresse mail existe déjà !"
          })
        }
        else {

          const regex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z0-9\d@$!%*?&]{8,}$/;
          const password = req.body.password;

          if (password.match(regex)) {
            bcrypt
              .hash(password, 10)
              .then((hash) => {
                const user = new User({
                  mail: req.body.mail,
                  password: hash,
                  admin: false,
                });
                user
                  .save()
                  .then(() => {
                    res.status(201).json({
                      message: "Utilisateur créé !",
                    })
                  }
                  )
                  .catch((error) => {
                    res.status(403).json({
                      error,
                    })
                  }
                  );

              })
              .catch((error) => {
                console.log(error)
                res.status(500).json({
                  error,
                })
              });
          } else {
            res.status(400).json({
              message: "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
            })

          }
        }
      })

  };

  const login = (req, res, next) => {
    User.findOne({
      where: {
        mail: req.body.mail,
      }
    })
      .then((user) => {

        if (!user) {
          return res.status(404).json({
            message: "Identifiant incorrect !",
          });
        }
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            if (!valid) {
              return res.status(401).json({
                message: "Mot de passe incorrect !",
              });
            }
            const token = jwt.sign(
              {},
              SECRET_TOKEN,
              {
                expiresIn: "24h",
                algorithm: "HS256",
                subject: user.id.toString()
              }
            );
            res.cookie("token", token, { httpOnly: true });
            res.status(200).json({
              token,
            });
          })
          .catch((error) => {
            res.status(500).json({
              message: "Erreur serveur 1 : " + error,
            })
          });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Erreur serveur 2"
        })
      });
  };

  const logout = (req, res) => {
    const user = req.user;
    res.clearCookie("token");
    res.status(204).end();
  }

  const getToken = (req, res) => {
    let { token } = req.cookies;
    if (token) {
      res.json({ token });
    } else {
      res.status(401).json({ error: { message: "Not authenticated" } });
    }
  };

  return {
    signup,
    login,
    getToken,
    logout
  }
}
