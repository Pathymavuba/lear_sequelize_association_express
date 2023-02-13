const Product = require('../models/product')

exports.createProduct = (req, res) => {
    const productName = req.body.productName;
  
    const newProduct = new Product({ productName });
    newProduct
      .save()
      .then((product) => res.status(200).json({ message: "success", product: product }))
      .catch((err) => res.status(500).json({ message: "error", err: err }));
  };
  
  exports.getAllProducts = async(req,res)=>{
    
      try {
          const products = await Product.findAll()
          if(products){
              return res.status(200).json({ message: "success", products: products})
          }
          return res.status(404).json({ message:"there is no product"})
      
          
      } catch (error) {
          res.status(500).json({ message: "error", err:error });
      }
    
  }
  