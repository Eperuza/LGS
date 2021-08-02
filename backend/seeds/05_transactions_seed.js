
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
        {
          amount: 100.00,
          customer_id: 2,
          type_id: 1,
          employee_id: 1
        },
        {
          amount: -50.00,
          customer_id: 2,
          type_id: 2,
          employee_id: 1
        }
      ]);
    });
};
