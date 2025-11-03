import app from "./app.js";
import config from "./config/config.js";
import prisma from "./config/prisma.js";



const PORT = config.port || 8080;

const server = app.listen(PORT,()=>console.log(`Server is listening on port ${PORT}`));  


process.on('SIGINT', async () => {
  await prisma.$disconnect()
  server.close(() => console.log('Server stopped'))
})