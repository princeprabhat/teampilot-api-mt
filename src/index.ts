import app from "./app.js";



const PORT = Number(process.env.PORT || 3000);


app.get("/rest",(req,res)=>{
    res.send("Hello, World!");
})

app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`));  


