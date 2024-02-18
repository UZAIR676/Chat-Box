import mongoose from "mongoose"

const connectmongoose = async () => {
    try {
      const obj = await mongoose.connect(`${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_Name}`)
        console.log(`You successfully connected to the database !${obj.connect.host}`);
    } catch (error) {
       console.log("Error connecting to the database:",error) 
       process.exit(1);
    }
}

export default connectmongoose
