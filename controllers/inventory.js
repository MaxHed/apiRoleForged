module.exports = function ({ Inventory }) {

    const getInventoryByCharacterId = async (req, res) => {
        const inventory = await Inventory.findOne({ where: { CharacterId: req.CharacterId } })

        res.json(inventory)
    }

    return {
        getInventoryByCharacterId
    }
}
