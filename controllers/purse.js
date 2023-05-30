module.exports = function ({ Purse }) {

    const getPurse = async (req, res) => {
        const purse = await Purse.findOne({ where: { CharacterId: req.CharacterId } })

        res.json(purse)
    }

    return {
        getPurse
    }
}
