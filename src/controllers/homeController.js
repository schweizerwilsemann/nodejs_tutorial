
const connection = require("../configuration/database.js");


const getHomePage = (req, res) => {
    let users = [];
    connection.query(
        'SELECT * FROM Users',
        function(err, results, fields){
            users = results;
            console.log(">>>results = ",results);
            console.log(">>> check users: ", users);
            res.send(JSON.stringify(users));
        }
    );
    
} 
const getABC = (req, res) => {
    res.send('Check abc');
}
const getFromNew = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomePage,
    getABC,
    getFromNew
}