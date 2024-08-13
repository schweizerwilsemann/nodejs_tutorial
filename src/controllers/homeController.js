
const getHomePage = (req, res) => {
    res.send('Hello World, Shady is back here');
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