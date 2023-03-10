import Item from "../model/items.js";
export const getAllItems = async (req, res) => {
  try {
    const data = await Item.find({});
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: true,
      data: error.message,
    });
  }
};
export const getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Item.findById({ _id: id });
    res.status(200).send({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const createItem = async (req, res) => {
  const { name, type, price, color, img, storage } = req.body;
  try {
    const data = await Item.create({
      name: name,
      type: type,
      color: color,
      price: price,
      img: img,
      storage: storage,
    });

    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.findByIdAndRemove({ _id: id });
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
export const uptadeItems = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.findByIdAndUpdate({ _id: id }, req.body);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};
