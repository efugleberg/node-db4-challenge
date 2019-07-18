exports.seed = function(knex) {
  return knex("table_name").insert([
    {
      recipes_id: 1,
      ingredients_id: 1,
      ingredients_quantity: 1,
      ingredient_measurement: "bowl"
    },
    {
      recipes_id: 1,
      ingredients_id: 2,
      ingredients_quantity: 1,
      ingredient_measurement: "backet"
    },
    {
      recipes_id: 1,
      ingredients_id: 3,
      ingredients_quantity: 3,
      ingredient_measurement: "cup"
    }
  ]);
};
