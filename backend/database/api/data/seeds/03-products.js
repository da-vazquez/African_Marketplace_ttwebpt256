
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {product_name: 'Simsim', category_id: 14},
        {product_name: 'Chin Chin', category_id: 6},
        {product_name: 'Cabbage', category_id: 15},
        {product_name: 'Yam', category_id: 13},
        {product_name: 'Ginger', category_id: 15},
        {product_name: 'Sunflower Seeds', category_id: 14}
      ]);
    });
};
