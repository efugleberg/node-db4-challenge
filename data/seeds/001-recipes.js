exports.seed = function(knex, Promise) {
  // Inserts seed entries
  return knex("recipe")
    .truncate()
    .then(function() {
      return knex("recipe").insert([
        { recipe_name: "macaroni" },
        { recipe_name: "banana bread" },
        { recipe_name: "stir fry" }
      ]);
    });
};
