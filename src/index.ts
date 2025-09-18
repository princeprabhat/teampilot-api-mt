import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const PORT = Number(process.env.PORT || 3000);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/rest",(req,res)=>{
    res.send("Hello, World!");
})

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`));  


