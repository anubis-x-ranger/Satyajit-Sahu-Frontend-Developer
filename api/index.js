import express from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv'; 
import cors from 'cors'
import router from "./routes/data.js";
dotenv.config();
const PORT=process.env.PORT || 5000;


const app=express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/data",router)

app.listen(PORT,()=>console.log(`Server running on PORT : http://localhost:${PORT}`))