
exports.up = function(knex) {
  return knex.schema.createTable('transactions', function(table){
    table.increments('id').primary();
    table.decimal('amount', 6, 2);
    table.timestamp('date').defaultTo(knex.fn.now());
    table.integer('customer_id');
    table.integer('type_id');
    table.integer('employee_id');
    table.string('notes');
    table.foreign('customer_id').references('id').inTable('customers');
    table.foreign('employee_id').references('id').inTable('employees');
    table.foreign('type_id').references('id').inTable('transaction_types');
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('transactions', function(table){
    table.dropForeign('customer_id');
    table.dropForeign('type_id');
    table.dropForeign('employee_id');
  })
  return knex.schema.dropTableIfExists('transactions');
};
