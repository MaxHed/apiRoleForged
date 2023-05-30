module.exports = function ({ Job }) {

    const getJob = async (req, res) => {
        const job = await Job.findOne({ where: { id: req.id } })
        
        res.json(job);
    }

    const getAll = async (req, res) => {
        const jobs = await Job.findAll({})

        res.json(jobs)
    }
    

    return {
        getJob,
        getAll
    }
}
