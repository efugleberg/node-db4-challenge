exports.seed = function(knex, Promise) {
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      return knex("recipe_ingredients").insert([
        {
          recipe_id: 1,
          ingredients_id: 1,
          ingredient_quantity: 1,
          ingredient_measurement: "bowl"
        },
        {
          recipe_id: 1,
          ingredients_id: 2,
          ingredient_quantity: 1,
          ingredient_measurement: "backet"
        },
        {
          recipe_id: 1,
          ingredients_id: 3,
          ingredient_quantity: 3,
          ingredient_measurement: "cup"
        }
      ]);
    });
};
