import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbConnect = async(req,res)=>{
     try{
           await  mongoose.connect(process.env.MONGODB_URL).
            then(console.log(`db is connected is successfully`));
             }
     catch(error){
        console.log(`error occur in connection : ${error}`);
        process.exit(   1);
     }
}
export default dbConnect;