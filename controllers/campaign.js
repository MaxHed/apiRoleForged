module.exports = function ({ Campaign }) {

    const getCampaign = async (req, res) => {
        const campaign = await Campaign.findOne({ where: { id: req.id } })
        
        res.json(campaign);
    }

    const getAllByUserId = async (req, res) => {
        const campaigns = await Campaign.findAll({
            where: { UserId: req.UserId }
        })

        res.json(campaigns)
    }
    

    return {
        getCampaign,
        getAllByUserId
    }
}
