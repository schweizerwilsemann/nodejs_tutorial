const mongoose = require('mongoose');
const Project = require('../models/project');

const createProjectsService = async (data) => {
    if (data.type === 'EMPTY-PROJECT') {
        let result = await Project.create(data);
        return result;
    }

    if (data.type === 'ADD-USERS') {
        console.log(">>>check data: ", data);
        let myProject = await Project.findById(data.projectId).exec();

        for (let i = 0; i < data.usersArr.length; ++i) {
            // Sử dụng từ khóa new để khởi tạo ObjectId
            myProject.usersInfor.push(new mongoose.Types.ObjectId(data.usersArr[i]));
        }

        let newResult = await myProject.save();
        console.log(">>>check project: ", myProject);
        return newResult;
    }

    return null;
}

module.exports = {
    createProjectsService
}
