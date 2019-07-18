const express = require("express");

const Recipes = require("./recipe-model.js");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: "Failed to get schemes" });
  }
});

router.get("/:id/shoppingList", async (req, res) => {
  const { id } = req.params;
  try {
    const list = await Recipes.getShoppingList(id);
    if (!list.length) {
      res.status(404).json({
        message: `No ingredients for recipe with id ${id}.`
      });
    } else {
      res.status(200).json(list);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id/instructions", async (req, res) => {
  const { id } = req.params;
  try {
    const steps = await Recipes.getInstructions(id);
    if (!steps.length) {
      res.status(404).json({
        message: `No instructions for recipe with id ${id}.`
      });
    } else {
      res.status(200).json(steps);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
