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
    type: Array,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
});
const Item = mongoose.model("item", ItemSchema);
export default Item;
