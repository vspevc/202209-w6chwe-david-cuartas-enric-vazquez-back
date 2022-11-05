import { model, Schema } from "mongoose";

const robotSchema = new Schema({
  name: String,
  imageUrl: String,
  stats: {
    speed: Number,
    endurenace: Number,
    createAt: Number,
  },
});

const Robot = model("robot", robotSchema, "robots");

export default Robot;
