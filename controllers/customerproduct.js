const Customerproduct = require('../models/customerproduct.js')
const Product = require('../models/product')
const Customer = require('../models/customer')


exports.addCustomerproduct = (req,res)=>{
    const {customerId,productId} = req.body

    const achat = new Customerproduct({customerId: customerId, productId: productId})
    achat.save()
    .then(achat=>res.status(200).json({message:"achat reuissi",achat:achat}))
    .catch(err=>err.json({error:err}))
}

exports.getAllachats = (req,res)=>{
    Customerproduct.findAll()
    .then(achats=>res.status(200).json({achats}))
    .catch(err=>res.status(500).json({err}))
}
exports.getAchat = (req,res)=>{
    const id = req.params.id
    Customerproduct.findByPk(id,{
        include:[
            {
                model:Customer,
                attributes:["customerName"]
            },
            {
                model:Product,
                attributes: ["productName"],
              },
        ]
    })
    .then(achat=>res.status(200).json({achat}))
    .catch(err=>res.status(500).json({err}))

}