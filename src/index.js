import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

// console.log("MONGODB_URI =", process.env.MONGODB_URI);

connectDB()
.then(() =>{
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ERROR: ",err);
});


// import express from "express";
// const app = express();
// (async ()=>{
//     try{
//           mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//           app.pn("error",(error)=>{
//             console.log("ERROR: ",error);
//             throw error;
//           })
//           app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//           })
//     }
//     catch(error){
//         console.error("ERROR:", error);
//         throw error
//     }
// })()