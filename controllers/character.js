module.exports = function ({ Character }) {

    const getCharacter = async (req, res) => {
        const character = await Character.findOne({ where: { id: req.params.id } })

        res.json(character);
    }

    const getAllByUserId = async (req, res) => {
        const characters = await Character.findAll({
            where: { UserId: req.UserId }
        })

        res.json(characters)
    }

    const create = async (req, res) => {
        const character = new Character({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            playable: req.body.playable,
            createdAt: new Date(),
            updatedAt: new Date(),
            UserId: req.UserId,
            RaceId: req.body.RaceId,
            JobId: req.body.JobId,

        });

        await character.save().then(() => {
            res.status(201).json({
                message: "Personnage créé !",
            })
        }).catch((error) => {
            res.status(403).json({
                error,
            })
        });
    }

    const edit = async (req, res) => {
        const character = await Character.findOne({ where : { id: req.body.id } })

        character.first_name = req.body.first_name
        character.last_name = req.body.last_name
        character.playable = req.body.playable
        character.updatedAt = new Date()

        await character.save().then(() => {
            res.status(201).json({
                message: "Personnage modifiée !",
            })
        }).catch((error) => {
            res.status(403).json({
                error,
            })
        });
    }

    return {
        getCharacter,
        getAllByUserId,
        create,
        edit
    }
}