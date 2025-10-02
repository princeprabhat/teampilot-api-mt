import app from "./app.js";
import config from "./config/config.js";



const PORT = config.port || 8181;


app.get("/rest",(req,res)=>{
    res.send("Hello, World!");
})

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`));  


