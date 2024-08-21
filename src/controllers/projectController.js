const {createProjectsService} = require('../services/projectsService.js')

const postCreateProjects = async (req, res) => {
    let result = await createProjectsService(req.body);
    return res.status(200).json({
        errorCode: 0,
        data: result
    })
}

module.exports = {
    postCreateProjects
}