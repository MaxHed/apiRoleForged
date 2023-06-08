module.exports = function ({ Item }) {

    const getItem = async (req, res) => {
        const item = await Item.findOne({ where: { id: req.id } })
        
        res.json(item);
    }

    const getAll = async (req, res) => {
        const items = await Item.findAll({})

        res.json(items)
    }
    
    const create = async (req, res) => {
        const item = new Item({
            name: req.body.name,
            description: req.body.description,
            slot: req.body.slot,
            value: req.body.value,
            max_size_stack: req.body.max_size_stack,
            for_quest: req.body.for_quest,
            createdAt: new Date(),
            updatedAt: new Date()
        });

        await item.save().then(() => {
            res.status(201).json({
                message: "Item créé !",
            })
        }).catch((error) => {
            res.status(403).json({
                error,
            })
        });
    }

    const edit = async (req, res) => {
        const item = Item.findOne({ where: { id: req.id } })

        item.name = req.body.name
        item.description = req.body.description
        item.slot = req.body.slot
        item.value = req.body.value
        item.max_size_stack = req.body.max_size_stack
        item.for_quest = req.body.for_quest
        item.updatedAt = new Date()

        await item.save().then(() => {
            res.status(201).json({
                message: "Item modifiée !",
            })
        }).catch((error) => {
            res.status(403).json({
                error,
            })
        });
    }

    return {
        getItem,
        getAll,
        create,
        edit
    }
}
