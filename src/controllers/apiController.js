const User = require('../models/users.js');


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

module.exports = {
    getUsersAPI, deleteUsersAPI, postCreateUserAPI, putUpdateUserAPI
}