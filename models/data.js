const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    id_data: {
        type: Number,
        required: true
        
    },
    lon: {
        type: Number,
        required: true
        
    },

    lat: {
        type: Number,
        required: true
        
    }
});
const User = module.exports = mongoose.model('Data', UserSchema);

module.exports.id = function(id, callback) {
    const query = {
        id_data: username
    }
    User.findOne(query, callback);
}

module.exports.list = function( callback) {

    User.find(callback);
}




