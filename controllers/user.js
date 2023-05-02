// Importation du package de cryptage des mots de passe
const bcrypt = require("bcrypt");
// Importation du package qui permet de créer et de vérifier les tokens d'authentification
const jwt = require("jsonwebtoken");

const {env :{ADMIN_PASS, SECRET_TOKEN}} = process;

module.exports = function ({ User }) {

    const getUser = async (req, res) => {
        const { token } = req.cookies;
        const { sub } = jwt.decode(token, process.env.SECRET_TOKEN, { algorithms: ['HS256'] })
        const user = await User.findOne({ where: { id: sub } })
        
        res.json(user);
    }

    // TEST

    const getAll = async (req, res, next) => {
        const users = await User.findAll({
            attributes: ['id', 'mail']
        });

        res.json(users);
    }

    const getById = async (req, res, next) => {
        const id = req.params.id;
        if (id) {
            try {
                const users = await User.findByPk(id);
                if (users) {
                    res.json(users);
                    return users;
                }
                else {
                    return res.status(404).json({
                        error: "L'utilisateur n'existe pas",
                    });
                }


            } catch (err) {
                return res.status(500).json({
                    error: err,
                });
            }

        }
        else {
            return res.status(400).json({
                error: "Aucun parametre dans l'URL",
            });
        }

    }

    const changeUserToAdmin = async (req, res, next) => {
        const pass = req.body.pass;

        if (pass === process.env.ADMIN_PASS) {
            const id = req.body.id;
            if (id) {
                try {
                    const user = await User.findByPk(id);
                    if (user) {
                        user.admin = user.admin ? false : true ;
                        await user.save();
                        res.json(user);
                        return user;
                    }
                    else {
                        return res.status(404).json({
                            error: "L'utilisateur n'existe pas",
                        });
                    }
                } catch (err) {
                    return res.status(500).json({
                        error: err,
                    });
                }
            }
            else {
                return res.status(400).json({
                    error: "Aucun parametre dans l'URL",
                });
            }
        }
        else {
            return res.status(400).json({
                error: "Mauvais mot de passe administrateur "
            });
        }
    }

    return {
        getUser,
        getAll,
        getById,
        changeUserToAdmin
    }
}
