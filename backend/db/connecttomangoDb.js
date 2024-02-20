import mongoose from "mongoose"

const connectmongoose = async () => {
    try {
      const obj = await mongoose.connect (process.env.MONGO_DB_URL)
        console.log(`You successfully connected to the database !`);
    } catch (error) {
       console.log("Error connecting to the database:",error) 
       process.exit(1);
    }
}

export default connectmongoose;
