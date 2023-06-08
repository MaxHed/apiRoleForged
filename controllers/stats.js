module.exports = function ({ Stats }) {

    const getStatsByCharacterId = async (req, res) => {
        const stats = await Stats.findOne({ where: { CharacterId: req.params.CharacterId } })
        
        res.json(stats);
    }

    return {
        getStatsByCharacterId
    }
}
