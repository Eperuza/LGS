
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customers').del()
    .then(function () {
      // Inserts seed entries
      return knex('customers').insert([
        {
        first_name: 'Jeremy',
        last_name: 'Riviere',
        phone: '1-800-FAKE',
        email: 'fake@fakemail.com',
        acc_balance: 0
        },
        {
          first_name: 'Billy',
          last_name: 'Bob',
          phone: '1-801-FAKE',
          email: 'fake2@fakemail.com',
          acc_balance: 50
        },
      ]);
    });
};
