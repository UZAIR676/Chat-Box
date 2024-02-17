import express from 'express';
import dotenv from 'dotenv';
import authRoutes from "./routes/auth.Routes.js"
import connectmongoose from './db/connecttomangoDb.js';
const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();
app.use (express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    connectmongoose();
    console.log(`Your server is running at ${PORT}`);
});
