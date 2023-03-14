import mongoose, { Schema } from "mongoose";

const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Бүтээгдэхүүний нэр"],
  },
  price: {
    type: String,
  },
  type: {
    type: Array,
  },
  typeOfClothes: {
    type: String,
    enum: ["sneakers", "soccers", "shirts", "pants", "shorts"],
    default: "sneakers",
  },
  color: {
    type: Array,
  },
  img: {
    type: String,
  },
  storage: {
    type: Number,
  },
  accept: {
    type: Boolean,
    enum: [false, true],
    default: false,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
const Item = mongoose.model("item", ItemSchema);
export default Item;
