module.exports = function ({ Map }) {

    const getMap = async (req, res) => {
        const map = await Map.findOne({ where: { id: req.id } })
        
        res.json(map);
    }

    const getAllByUserId = async (req, res) => {
        const maps = await Map.findAll({
            where: { UserId: req.UserId }
        })

        res.json(maps)
    }
    

    return {
        getMap,
        getAllByUserId
    }
}
