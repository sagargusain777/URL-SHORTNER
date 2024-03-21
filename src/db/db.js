import mongoose from 'mongoose';

const DB_NAME = 'Short-Url'
const connectDB = async()=>{

    try {

        const connectionInstance = mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
        console.log(`MONGODB is connected to Host : ${connectionInstance.connection.host}`)

        
    } catch (error) {

        console.error(`MONGODB connection failed : ${error.message}`)
        process.exit(1);
    }
}
export default connectDB;