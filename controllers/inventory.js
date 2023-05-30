module.exports = function ({ Inventory }) {

    const getInventory = async (req, res) => {
        const inventory = await Inventory.findOne({ where: { CharacterId: req.CharacterId } })

        res.json(inventory)
    }

    return {
        getInventory
    }
}
