
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transaction_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('transaction_types').insert([
        {name: 'bulk'},
        {name: 'singles'},
        {name: 'prize'},
        {name: 'transfer'},
        {name: 'tcg_supplies'},
        {name: 'other'},
      ]);
    });
};
