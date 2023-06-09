module.exports = function ({ Job }) {

    const getJob = async (req, res) => {
        const job = await Job.findOne({ where: { id: req.params.id } })
        
        res.json(job);
    }

    const getAll = async (req, res) => {
        const jobs = await Job.findAll({})

        res.json(jobs)
    }

    const create = async (req, res) => {
        const job = new Job({
            name: req.body.name,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await job.save().then(() => {
            res.status(201).json({
                message: "Classe créée !",
            })
        }).catch((error) => {
            res.status(403).json({
                error,
            })
        }); 

    }

    const edit = async (req, res) => {
        const job = await Job.findOne({ where : { id: req.body.id } })

        job.name = req.body.name
        job.updatedAt = new Date()

        await job.save().then(() => {
            res.status(201).json({
                message: "Metier modifiée !",
            })
        }).catch((error) => {
            res.status(403).json({
                error,
            })
        });
    }

    return {
        getJob,
        getAll,
        create,
        edit
    }
}
