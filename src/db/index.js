// import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";

// const connectDB = async () =>{
//     try {
//         const connectionInstance = await mongoose.connect(
//     process.env.MONGODB_URI
// );
//         console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} `);
//     } catch (error) {
//         console.error("ERROR:", error);
//         process.exit(1);
//     }
// }
// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `MongoDB Connected !! DB HOST: ${conn.connection.host}`
    );
  } catch (error) {
    console.error("ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;
