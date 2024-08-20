const {uploadSingleFile} = require('../services/filesService');
const {createCustomersService, 
    createArrayCustomersService, 
    getAllCustomersService, 
    updateCustomersService, 
    deleteCustomersService, 
    deleteArrayCustomersService} = require('../services/customersService');


module.exports = {
    postCreateCustomers: async (req, res) => {
    //     name: {
    //         type: String,
    //         require: true,
            
    //     },
    //     email: String,
    //     phone: String,
    //     address: String,
    //     image: String,
    //     description: String,
    // },
        let {name, address, phone, email, description} = req.body;
        let imageURL = "";
        console.log(">>> check data: ", name, description);
        if(!req.files || Object.keys(req.files).length === 0){
            return res.status(400).send('No files were uploaded!');
        }
    
        const results = await uploadSingleFile(req.files.image); 
        imageURL = results.path;

        let customerData = {
            name, address, phone, email, description, imageURL
        }
        const customer = await createCustomersService(customerData);
        return res.status(200).json({
            errorCode: 0,
            data: customer
        });
    },
    postCreateArrayCustomers: async (req, res) => {
        let customers = await createArrayCustomersService(req.body.customers); 
        if(customers){
            return res.status(200).json({
                errorCode: 0,
                data: customers
            })
        }
        else{
            return res.status(200).json({
                errorCode: -1,
                data: customers
            })
        }
    },
    getAllCustomers: async (req, res) => {
        
        const limit = req.query.limit;
        const page = req.query.page;
        let results = null;
        let name = req.query.name;
        if(limit && page){
            results = await getAllCustomersService(limit, page, name, req.query);
        }
        else
        results = await getAllCustomersService(limit, page);
        if(results){
            return res.status(200).json({
                errorCode: 0,
                data: results
            })
        }
        else{
            return res.status(200).json({
                errorCode: -1,
                data: results
            })
        }
    },
    updateCustomers: async (req, res) => {
        const { id, name, email, address } = req.body;
        let result = await updateCustomersService(id, name, email, address);
        if (result.errorCode === 0) {
            return res.status(200).json(result);
        } else {
            return res.status(500).json(result);
        }
    },
    deleteCustomers: async (req, res) => {
        const id = req.body.id;
        let result = await deleteCustomersService(id);
        return res.status(200).json({
            errorCode: 0,
            data: result
        })
    },
    postDeleteArrayCustomers: async(req, res) => {
        const arrayCustomersId  = req.body.customersId;
        let results = await deleteArrayCustomersService(arrayCustomersId);
        return res.status(200).json({
            errorCode: 0,
            data: results
        })
    }

}