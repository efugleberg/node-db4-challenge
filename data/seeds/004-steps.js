exports.seed = function(knex, Promise) {
  return knex("steps")
    .truncate()
    .then(function() {
      return knex("steps").insert([
        { step_number: 1, recipe_id: 1, instructions: "pour water in bowl" },
        {
          step_number: 2,
          recipe_id: 1,
          instructions: "microwave 3.5 minutes"
        },
        { step_number: 3, recipe_id: 1, instructions: "add milk and let cool" }
      ]);
    });
};
