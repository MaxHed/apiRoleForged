module.exports = function ({ Session }) {

    const getSession = async (req, res) => {
        const session = await Session.findOne({ where: { id: req.id } })
        
        res.json(session);
    }

    const getAllByCampaignId = async (req, res) => {
        const sessions = await Session.findAll({
            where: { CampaignId: req.CampaignId }
        })

        res.json(sessions)
    }
    

    return {
        getSession,
        getAllByCampaignId
    }
}
