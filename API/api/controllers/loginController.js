var mongoose = require('mongoose'),
    User = mongoose.model('User');
const Bcrypt = require("bcryptjs");

exports.verify_credentials = async (req, res) => {
    try {
        console.log(req.body.password);
        var result = await User.findOne({
            username: req.body.username,
        });
        console.log(result);
        if(result) {
            Bcrypt.compare(req.body.password, result.password).then(result => {
                if(result) {
                    res.status(200).send('Login Successful');
                    return;
                }
                else {
                    res.status(403).send('Username/Password Invalid');
                }
            })
        }
        else {
            res.status(403).send('Username/Password Invalid');
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
};