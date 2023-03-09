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
  color: {
    type: Array,
  },
  img: {
    type: String,
  },
  storage: {
    type: Number,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});
const Item = mongoose.model("item", ItemSchema);
export default Item;
