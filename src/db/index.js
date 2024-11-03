import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDb  = async ()=>{

    try{
        const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n  Mongo db connected  ${connectionInstance.connection.host} `);
    }
    catch(Error){
         console.error("Mongo Db Connection error  ",Error);
         process.exit(1)
    }
}

export default  connectDb;