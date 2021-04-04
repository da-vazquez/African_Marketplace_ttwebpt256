
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('category').del()
    .then(function () {
      // Inserts seed entries
      return knex('category').insert([
        {category_name: 'Chicken'},
        {category_name: 'Beef'},
        {category_name: 'Fish'},
        {category_name: 'Other Animal'},
        {category_name: 'sweets'},
        {category_name: 'cookies'},
        {category_name: 'Beans'},
        {category_name: 'Rice'},
        {category_name: 'Corn'},
        {category_name: 'Flour'},
        {category_name: 'Spice'},
        {category_name: 'Pepper'},
        {category_name: 'Cereals'},
        {category_name: 'Maize'},
        {category_name: 'Fruit'},
        {category_name: 'Peas'},
        {category_name: 'Carrot'},
        {category_name: 'Root Vegitable'},
        {category_name: 'Seed / Nut'},
        {category_name: 'Other Vegitable'},
        {category_name: 'Other'}
      ]);
    });
};
