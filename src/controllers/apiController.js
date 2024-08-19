const User = require('../models/users.js');
const {uploadSingleFile, uploadMultipleFiles} = require('../services/filesService.js')

const getUsersAPI = async (req, res) => {
    let results = await User.find({});
    return res.status(200).json({
        errorCode: 0,
        data: results
    });
}


const postCreateUserAPI = async (req, res) => {
    
    const email = req.body.email;
    const name = req.body.myname;
    const city = req.body.city;

    let user = await User.create({
        email: email,
        name: name,
        city: city
    });
    return res.status(200).json({
        errorCode: 0,
        data: user
    });
}

const putUpdateUserAPI = async (req, res) => {
    const userId = req.body.userId;
    const email = req.body.email;
    const name = req.body.myname;
    const city = req.body.city;

    let user = await User.updateOne({_id: userId}, {name: name, email: email, city: city});

    return res.status(200).json({
        errorCode: 0,
        data: user
    });
}

const deleteUsersAPI = async (req, res) => {
    const id =  req.body.userId;
    let results = await User.deleteOne({
        _id: id
    })
    
    return res.status(200).json({
        errorCode: 0,
        data: results
    });;
}

const postUploadSingleFileAPI = async (req, res) => {
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No files were uploaded!');
    }

    const results = await uploadSingleFile(req.files.image);
    console.log(">>> check results: ", results);
    return res.send('ok single');
}


const postUploadMutipleFilesAPI = async (req, res) => {
    if(!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded!');
    }

    let files = req.files.image;
    
    // Đảm bảo files luôn là mảng
    if (!Array.isArray(files)) {
        files = [files];
    }

    // Upload multiple
    const results = await uploadMultipleFiles(files);
    return res.status(200).json({
        errorcode: 0,
        data: results
    });
};
module.exports = {
    getUsersAPI, deleteUsersAPI, postCreateUserAPI, putUpdateUserAPI, postUploadSingleFileAPI, postUploadMutipleFilesAPI
}