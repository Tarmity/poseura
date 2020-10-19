const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;
mongoose.promise = Promise


const userSchema = new Schema ({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }, 
    phone: { type: String, required: true },
    password: { type: String, required: true }
});

// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// Define pre-hooks for the save method
userSchema.pre('save', function (next) {
    if(!this.password) {
        console.log ('models/user.js =========NO PASSOWRD PROVIDED=========')
        next()
    } else {
        console.log ("models/user.js hashPassword in pre save")
        this.password = this.hashPassword(this.password)
        next()
    }
})


const User = mongoose.model("User", userSchema);


module.exports = User;