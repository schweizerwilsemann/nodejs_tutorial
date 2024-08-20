const customers = require('../models/customers');


const createCustomersService = async (customerData) => {
    try {
        let result = await customers.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.imageURL
        })
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
}

const createArrayCustomersService = async (customersArray) => {
    try {
        const result = await customers.insertMany(customersArray);
        return result;
    } catch (error) {
        console.log(">>> error: ", error);
        return null;
    }
}

const getAllCustomersService = async () => {
    try{
        const result = await customers.find({});
        return result;
    }
    catch(error){
        console.log(">>> error: ", error);
        return null;
    }
}

const updateCustomersService = async (id, name, email, address) => { 
    try {
        let customer = await customers.updateOne({_id: id}, {name: name, email: email, address: address});

        return {
            errorCode: 0,
            data: customer
        };
    } catch (error) {
        console.log(">>> error: ", error);
        return null;
    }
}

const deleteCustomersService = async (id) => { 
    try {
        let result = await customers.deleteById(id);
        return result;
    } catch (error) {
        console.log(">>> error: ", error);
        return null;
    }
}

const deleteArrayCustomersService = async (arrayCustomersId) => {
    try {
        let result = await customers.delete({_id: {$in: arrayCustomersId}});
        return result
    } catch (error) {
        console.log(">>> error: ", error);
        return null
    }
}
module.exports = {
    createCustomersService, 
    createArrayCustomersService, 
    getAllCustomersService, 
    updateCustomersService, 
    deleteCustomersService,
    deleteArrayCustomersService
}