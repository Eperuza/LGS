
exports.up = function(knex) {
  return knex.schema.createTable('transactions', function(table){
    table.increments('id').primary();
    table.decimal('amount', 2);
    table.date('date');
    table.integer('customer_id');
    table.integer('type_id');
    table.foreign('customer_id').references('id').inTable('customers');
    table.foreign('type_id').references('id').inTable('transaction_types');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('transactions');
};
