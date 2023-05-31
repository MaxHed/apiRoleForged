module.exports = function ({ Item }) {

    const getItem = async (req, res) => {
        const item = await Item.findOne({ where: { id: req.id } })
        
        res.json(item);
    }

    const getAll = async (req, res) => {
        const items = await Item.findAll({})

        res.json(items)
    }
    

    return {
        getItem,
        getAll
    }
}
