module.exports = function ({ Character }) {

    const getCharacter = async (req, res) => {
        const character = await Character.findOne({ where: { id: req.id } })
        
        res.json(character);
    }

    const getAll = async (req, res) => {
        const characters = await Character.findAll({
            where: { UserId: req.UserId }
        })

        res.json(characters)
    }
    

    return {
        getCharacter,
        getAll
    }
}
