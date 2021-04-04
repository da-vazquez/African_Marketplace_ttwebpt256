
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('product_info').del()
    .then(function () {
      // Inserts seed entries
      return knex('product_info').insert([
        {product_id: 1, seller_id: 1, seller_price: 2, qty: 5000, description: 'Freshly harvested and roasted. The best simsim you can buy!'},
        {product_id: 2, seller_id: 1, seller_price: 5, qty: 500, description: 'Cooked fresh daily by following a secret family recipe. One bite and you will not be able to stop eating this delicious chin chin'},
        {product_id: 1, seller_id: 2, seller_price: 1, qty: 9000, description: 'freshly picked simsim.'},
        {product_id: 5, seller_id: 2, seller_price: 2, qty: 200, description: 'Deliciously fresh ginger'},
        {product_id: 6, seller_id: 3, seller_price: 3, qty: 2000, description: 'Grown in America these sunflower seeds are roasted and salted locally for a mouthwateringly fresh taste'},
        {product_id: 4, seller_id: 4, seller_price: 3, qty: 20, description: 'fresh uncooked yam'},
        {product_id: 3, seller_id: 4, seller_price: 3, qty: 20, description: 'loacally grown cabbage'},
        {product_id: 1, seller_id: 5, seller_price: 4, qty: 20, description: 'Only 1/3 of the simsim we havest passes our strict quality control. Guarenteed to be the best simsim you have tried or your next order is free'},
      ]);
    });
};
