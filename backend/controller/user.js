import User from "../model/User.js";
import jwt from "jsonwebtoken";

export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});
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

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
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

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
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
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndRemove({ _id: id });
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

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    const token = jwt.sign({ ...user }, "secret", { expiresIn: "1d" });
    const boolean = await user.comparePassword(req.body.password);
    if (!user) {
      res.status(400).send({
        error: "iim hereglegch baihgyu",
      });
    }
    if (!boolean) {
      return res.status(400).send({
        error: "buruu",
      });
    } else {
      res.status(200).send({
        success: true,
        data: user,
        token: token,
      });
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      data: error.message,
    });
  }
};

export const sags = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          sagsItem: req.body,
        },
      }
    );
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
export const removeSags = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $pull: {
          sagsItem: req.body,
        },
      }
    );
    console.log(user.sagsItem);
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
export const wishlist = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $push: {
          wishlist: req.body,
        },
      }
    );
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
export const removeWishlist = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $pull: {
          wishlist: req.body,
        },
      }
    );
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
export const order = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate({ _id: id }, req.body);
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
