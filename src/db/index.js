import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI, {dbName: DB_NAME, // this adds DB name safely
});
        console.log(`\n MongoDB connectd ! to DB Host : ${connectionInstance.connection.host}`); //try doing console log    
        
    } catch (error) {
        console.log("Error : MongoDB Connection Error - ", error);
        process.exit(1);             //process is the reference of running application        
    }
}

export default connectDB;