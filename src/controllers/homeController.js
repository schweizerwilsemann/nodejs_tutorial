
const connection = require("../configuration/database.js");
const { getAllUsers, getUserById, updateUserById } = require('../services/CRUDService.js')

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
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


    // connection.query(
    //     `INSERT INTO Users (email, name, city) values 
    //     (?, ?, ?)`,
    //     [email, name, city],
    //     function(err, results){
    //         console.log(results);
    //         res.send('Created user sucess !');
    //     }
    // );

    let [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) values (?, ?, ?)`, [email, name, city],
    );
    console.log(">>> check results: ", results);
    res.send('Created user sucess !');
}

const getCreatePage = (req, res) => {
    res.render('create.ejs');
}
const getUpdatePage = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserById(userId)

    res.render('edit.ejs', {userEdit : user});
}

const postUpdateUser = async (req, res) => {
    const userId = req.body.userId;
    const email = req.body.email;
    const name = req.body.myname;
    const city = req.body.city;

    await updateUserById(email, city, name, userId);
    
    // res.send('Update user sucess !');
    res.redirect('/');
}

module.exports = {
    getHomePage,
    getABC,
    getFromNew,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}