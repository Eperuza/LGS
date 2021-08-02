
exports.up = function(knex) {
  return knex.schema.createTable('customers', function(table){
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('phone');
    table.string('email');
    table.decimal('acc_balance', 6, 2)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('customers');
};
