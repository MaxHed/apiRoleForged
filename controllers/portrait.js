module.exports = function ({ Portrait }) {

    const getPortraitByCharacterId = async (req, res) => {
        const portrait = await Portrait.findOne({ where: { CharacterId: req.params.CharacterId } })
        
        res.json(portrait);
    }

    return {
        getPortraitByCharacterId
    }
}
