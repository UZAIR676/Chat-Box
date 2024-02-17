import mongoose from "mongoose"

const connectmongoose = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("You successfully connected to the database !")
    } catch (error) {
       console.log("Error connecting to the database:",error) 
    }
}

export default connectmongoose
