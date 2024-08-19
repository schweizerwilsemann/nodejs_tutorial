const mongoose = require('mongoose');

// data shape
const customerSchema = new mongoose.Schema({
        // auto generate: _id: uuid
        name: {
            type: String,
            require: true,
            
        },
        email: String,
        phone: String,
        address: String,
        image: String,
        description: String,
    },
    //object 2: aka: config variables
    {timestamps: true}
);

const Customter = mongoose.model('Customer', userSchema);

module.exports = Customter;