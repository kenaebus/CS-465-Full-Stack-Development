/* GET Homepage */
const index = (req, res) => {
    res.render('index', {title: "Travir Getaways"});
};

module.exports = {
    index
}