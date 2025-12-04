import express from "express";
import Menu from "../models/menu.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const menu = await Menu.find();
  res.json(menu);
});

router.post("/", async (req, res) => {
  const newItem = new Menu(req.body);
  await newItem.save();
  res.json(newItem);
});

export default router;
