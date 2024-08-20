const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

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
    {
        timestamps: true, // createAt, updateAt
        // statics: {
        //     // findByName(name){
        //     //     return this.find({name: new RegExp(Name: 'i')});
        //     // }
        // }
    }
);

customerSchema.plugin(mongoose_delete, {overrideMethods: 'all'});

const Customter = mongoose.model('Customer', customerSchema);


module.exports = Customter;