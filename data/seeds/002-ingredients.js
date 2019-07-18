
exports.seed = function(knex) {
  
      return knex('ingredients').insert([
        { ingredients_name: 'noodles' },
        { ingredients_name: 'cheese' },
        { ingredients_name: 'milk' }
      ]);
};
