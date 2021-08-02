
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bulk_rates').del()
    .then(function () {
      // Inserts seed entries
      return knex('bulk_rates').insert([
        {
          category: 'commons/uncommons',
          rate: 35/1000,
          game_id: 1,
        },
        {
          category: 'rares',
          rate: 45/1000,
          game_id: 1,
        },
        {
          category: 'foils',
          rate: 25/1000,
          game_id: 2,
        },
        {
          category: 'commons',
          rate: 10/1000,
          game_id: 2,
        },
        {
          category: 'commons',
          rate: 5/1000,
          game_id: 3,
        },
        {
          category: 'foils',
          rate: 15/1000,
          game_id: 3,
        }
      ]);
    });
};
