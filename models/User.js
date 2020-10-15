const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    _id: { type: Number },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }, 
    phone: { type: String, required: true },
    password: { type: String, required: true }
});

userSchema.plugin(generateUniqueKey(() => String(Math.floor(Math.random() * 1000000))));
const User = mongoose.model("User", userSchema);

module.export = User;