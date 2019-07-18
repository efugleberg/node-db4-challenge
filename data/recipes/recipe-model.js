const db = require("../db-config.js");

module.exports = {
  find,
  getShoppingList,
  getInstructions
};

function find() {
  return db("recipe");
}

async function getShoppingList(recipe_id) {
  return await db("recipe_ingredients").where({ recipe_id });
}

async function getInstructions(recipe_id) {
  return await db("steps").where({ recipe_id });
}
