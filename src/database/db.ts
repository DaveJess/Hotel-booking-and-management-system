import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const DB_URL=process.env.DB_URL

mongoose.connect(process.env.DB_URL as string);

export const connectToDatabase = async () => {
    try{
        const conn = await mongoose.connect(DB_URL!)
        console.log("Database connected")
        

    }catch(error:any){
        console.log("Failed to connect to db")
        throw new Error(error)    
    }
    console.log(Error);
}

export default connectToDatabase;