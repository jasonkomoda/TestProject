var mongoose = require('mongoose'),
    User = mongoose.model('User');
const Bcrypt = require("bcryptjs");

exports.all_users = async (req, res) => {
    try {
        var result = await User.find({});
        res.send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
};

exports.create_user = async (req, res) => {
    try {
        req.body.password = Bcrypt.hashSync(req.body.password, 10);
        var new_user = new User(req.body);
        var result = await new_user.save();
        res.send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
};

exports.get_user = async (req, res) => {
    try {
        var result = await User.findById(req.params.userId);
        res.send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
};


exports.update_user = async (req, res) => {
    try {
        var result = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true })
        res.send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
};


exports.delete_user = async (req, res) => {
    try {
        var result = await User.remove({ _id: req.params.userId });
        res.send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
};