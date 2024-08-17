
const connection = require("../configuration/database.js");
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDService.js');
const User = require('../models/users.js');


const getHomePage = async (req, res) => {
    let results = await User.find({});
    return res.render('home.ejs', {listUsers: results});
    
} 
const getABC = (req, res) => {
    res.send('Check abc');
}
const getFromNew = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = async (req, res) => {
    
    const email = req.body.email;
    const name = req.body.myname;
    const city = req.body.city;
    console.log(">>> email: ", email, 'name: ', name, 'city: ', city);

    // or: const {email, name, city} = req.body;

    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city) values (?, ?, ?)`, [email, name, city],
    // );
    // res.redirect('/');
    await User.create({
        email: email,
        name: name,
        city: city
    });
    res.send('created sucess!');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('edit.ejs', {userEdit : user});
}

const postUpdateUser = async (req, res) => {
    const userId = req.body.userId;
    const email = req.body.email;
    const name = req.body.myname;
    const city = req.body.city;

    // await updateUserById(email, city, name, userId);
    
    await User.updateOne({_id: userId}, {name: name, email: email, city: city});
    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;
    let user = await User.findById(userId).exec();
    res.render('delete.ejs', {userEdit: user});
}

const postHandleRemoveUser = async (req, res) => {
    const id =  req.body.userId;
    await User.deleteOne({
        _id: id
    })
    
    res.redirect('/');
}

module.exports = {
    getHomePage,
    getABC,
    getFromNew,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}