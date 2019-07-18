exports.up = function(knex) {
  return knex.schema
    .createTable("recipe", tbl => {
      tbl.increments();
      tbl
        .text("recipe_name", 128)
        .notNullable()
        .unique();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.text("ingredients_name", 128)
      .notNullable();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipe")
        .notNullable()
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredients_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.float("ingredient_quantity").notNullable();
      tbl.text("ingredient_measurement", 128).notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipe")
        .notNullable()
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      // tbl
      //   .integer("ingredients_id")
      //   .unsigned()
      //   .references("id")
      //   .inTable("ingredients")
      //   .onDelete("RESTRICT")
      //   .onUpdate("CASCADE");
      tbl.text("instructions", 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("steps");
};
