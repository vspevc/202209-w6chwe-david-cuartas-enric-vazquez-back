import "../loadEnvionment.js";
import mongoose from "mongoose";

const dataBaseConnection = async () => mongoose.connect(process.env.MONGO_URL);

export default dataBaseConnection;
