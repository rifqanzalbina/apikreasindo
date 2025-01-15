const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

userSchema.statics.createUser = async function(email, password) {
    const user = new this({ email, password });
    await user.save();
    return user;
};

userSchema.statics.findByEmail = async function(email) {
    return this.findOne({ email });
};

const User = mongoose.model('User', userSchema);

module.exports = User;