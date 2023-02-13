const express = require('express');
const countryRoutes = require('./routes/country')
const capitalRoutes = require('./routes/capital')
const userRoutes = require('./routes/user')
const postRoutes = require('./routes/post')
const customerRoutes = require('./routes/customer')
const productRoutes = require('./routes/product')
const customerproductRoutes=require('./routes/customerproduct')
require('dotenv').config()
require('./config/db').sync()



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true}))

app.use('/api',countryRoutes)
app.use('/api',capitalRoutes)
app.use('/api',userRoutes)
app.use('/api',postRoutes)
app.use('/api',customerRoutes)
app.use('/api',productRoutes)
app.use('/api',customerproductRoutes)




app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`))