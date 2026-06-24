require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/hello");

const productJson = require("./products.json");

const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await product.deleteMany();
        await product.create(productJson);
        console.log("success");
    }
    catch(error){
       console.log(error);
    }
}


start()

