import mongoose from "mongoose";

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
});
const Item = mongoose.model("item", ItemSchema);
export default Item;
