module.exports = function ({ Race }) {

    const getRace = async (req, res) => {
        const race = await Race.findOne({ where: { id: req.id } })
        
        res.json(race);
    }

    const getAll = async (req, res) => {
        const races = await Race.findAll({})

        res.json(races)
    }
    

    return {
        getRace,
        getAll
    }
}
