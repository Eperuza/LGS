
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('employees').del()
    .then(function () {
      // Inserts seed entries
      return knex('employees').insert([
        {
          first_name: 'Simon',
          last_name: 'Bos',
          manager: true
        },
        {
          first_name: 'Kyle',
          last_name: 'Bot',
        }
      ]);
    });
};
