const Customer = require("../models/customer");

exports.createCustomer = (req, res) => {
  const customerName = req.body.customerName;

  const newCustomer = new Customer({ customerName });
  newCustomer
    .save()
    .then((customer) => res.status(200).json({ message: "success", customer: customer }))
    .catch((err) => res.status(500).json({ message: "error", err: err }));
};

exports.getAllCustomers = async(req,res)=>{
  
    try {
        const customers = await Customer.findAll()
        if(customers){
            return res.status(200).json({ message: "success", customers: customers})
        }
        return res.status(404).json({ message:"there is no customer"})
    
        
    } catch (error) {
        res.status(500).json({ message: "error", err:error });
    }
  
}
