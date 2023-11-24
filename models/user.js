const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    age: {
        type: Number,
        require:true
    },
    email: {
        type: String,
        require: true
    }
});
module.exports = mongoose.model('User',userSchema);