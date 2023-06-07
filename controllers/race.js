module.exports = function ({ Race }) {

    const getRace = async (req, res) => {
        const race = await Race.findOne({ where: { id: req.id } })
        
        res.json(race);
    }

    const getAll = async (req, res) => {
        const races = await Race.findAll({})

        res.json(races)
    }
    
    const create = async (req, res) => {
        const race = new Race({
            name: req.body.name,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await race.save().then(() => {
            res.status(201).json({
                message: "Race créée !",
            })
        }).catch((error) => {
            res.status(403).json({
                error,
            })
        }); 

    }

                

    return {
        getRace,
        getAll,
        create
    }
}
