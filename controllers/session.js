module.exports = function ({ Session }) {

    const getSession = async (req, res) => {
        const session = await Session.findOne({ where: { id: req.id, CampaignId: req.CampaignId } })
        
        res.json(session);
    }

    const getAllByCampaignId = async (req, res) => {
        const sessions = await Session.findAll({
            where: { CampaignId: req.CampaignId }
        })

        res.json(sessions)
    }
    
    const getCharactersInSession = async (req, res) => {
        const session = await Session.findOne({
            where: { id: req.id },
            include: [{ model: Character, as: "characters" }]
        })

        res.json(session.characters)
    }

    return {
        getSession,
        getAllByCampaignId,
        getCharactersInSession
    }
}
