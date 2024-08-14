
const connection = require("../configuration/database.js");


const getHomePage = (req, res) => {
    return res.render('home.ejs');
    
} 
const getABC = (req, res) => {
    res.send('Check abc');
}
const getFromNew = (req, res) => {
    res.render('sample.ejs');
}

const postCreateUser = (req, res) => {
    
    const email = req.body.email;
    const name = req.body.myname;
    const city = req.body.city;
    console.log(">>> email: ", email, 'name: ', name, 'city: ', city);

    // or: const {email, name, city} = req.body;
    connection.query(
        `INSERT INTO Users (email, name, city) values 
        (?, ?, ?)`,
        [email, name, city],
        function(err, results){
            console.log(results);
            res.send('Created user sucess !');
        }

    )
}

module.exports = {
    getHomePage,
    getABC,
    getFromNew,
    postCreateUser
}