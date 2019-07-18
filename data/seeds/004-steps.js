exports.seed = function(knex) {
  return knex("table_name").insert([
    { step_number: 1, recipes_id: 1, instructions: "pour water in bowl" },
    {
      step_number: 2,
      recipes_id: 1,
      instructions: "microwave 3.5 minutes"
    },
    { step_number: 3, recipes_id: 1, instructions: "add milk and let cool" }
  ]);
};
