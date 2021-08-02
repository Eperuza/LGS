
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(function () {
      // Inserts seed entries
      return knex('games').insert([
        {
          name: 'Pokémon',
          cash_rate: 0.5,
          credit_rate: 0.65
        },
        {
          name: 'Yu-Gi-Oh',
          cash_rate: 0.5,
          credit_rate: 0.6
        },
        {
          name: 'Magic the Gathering',
          cash_rate: 0.6,
          credit_rate: 0.7
        }
      ]);
    });
};
