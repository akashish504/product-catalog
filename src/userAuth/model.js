const mongoose = require("mongoose");
const { String } = mongoose.Schema.Types;
const UserAuth = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

const UserModel = mongoose.model("UserModel", UserAuth);

module.exports = {
    UserModel
}