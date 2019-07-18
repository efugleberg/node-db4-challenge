exports.seed = function(knex, Promise) {
  return knex("ingredients")
    .truncate()
    .then(function() {
      return knex("ingredients").insert([
        { ingredients_name: "noodles" },
        { ingredients_name: "cheese" },
        { ingredients_name: "milk" }
      ]);
    });
};
