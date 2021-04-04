
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sellers').del()
    .then(function () {
      // Inserts seed entries
      return knex('sellers').insert([
        {seller_name: 'Adisa', password: "test1", location: 'Kinshasa' },
        {seller_name: 'Mayme', password: "test2", location: 'Lagos' },
        {seller_name: 'Ernst', password: "test3", location: 'Cairo' },
        {seller_name: 'Imamu', password: "test4", location: 'Johannesburg' },
        {seller_name: 'Kerry', password: "test5", location: 'Ekurhuleni' },
      ]);
    });
};
