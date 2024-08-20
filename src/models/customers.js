const mongoose = require('mongoose');

// data shape
const customerSchema = new mongoose.Schema({
        // auto generate: _id: uuid
        name: {
            type: String,
            required: true,
            
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

const Customter = mongoose.model('Customer', customerSchema);

module.exports = Customter;