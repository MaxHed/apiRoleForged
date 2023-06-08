module.exports = function ({ Inventory }) {

    const getInventoryByCharacterId = async (req, res) => {
        const inventory = await Inventory.findOne({ where: { CharacterId: req.params.CharacterId } })

        res.json(inventory)
    }

    const getItemsInInventory = async (req, res) => {
        const inventory = await Inventory.findOne({
            where: { CharacterId: req.CharacterId },
            include: [{ model: Item, as: "items" }]
        })

        res.json(inventory.items)
    }

    return {
        getInventoryByCharacterId,
        getItemsInInventory
    }
}
