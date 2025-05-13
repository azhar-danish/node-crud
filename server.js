require('dotenv').config();
const mongoConnect = require('./database/db');
const cache = require('./cache/redis');
const express = require('express');
const cors = require('cors');
const app = express();

mongoConnect();

//cache
global.cache = cache;

//middleware
app.use(cors({origin:"http://localhost:8081"}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routing
const CustomerRoutes = require('./routes/customerRoutes');
const ProductRoutes = require('./routes/productRoutes');
const OrderRoutes = require('./routes/orderRoutes');
app.use('/api/customer',CustomerRoutes);
app.use('/api/products',ProductRoutes);
app.use('/api/orders',OrderRoutes);

//server testing
app.use('/',(req,res)=>{
    res.status(200).send({message:'welcome to my website'});
})
const port = process.env.PORT;
app.listen(port,()=>{
    console.log('server is running on port:'+port);
})


