exports.seed = function(knex) {
  // Inserts seed entries
  return knex("recipes").insert([
    { recipe_name: "macaroni" },
    { recipe_name: "banana bread" },
    { recipe_name: "stir fry" }
  ]);
};
