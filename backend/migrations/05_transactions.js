
exports.up = function(knex) {
  return knex.schema.createTable('transactions', function(table){
    table.increments('id').primary();
    table.decimal('amount', 2);
    table.date('date');
    table.integer('customer_id');
    table.integer('type_id');
    table.integer('employee_id');
    table.string('notes');
    table.foreign('customer_id').references('id').inTable('customers');
    table.foreign('employee_id').references('id').inTable('employees');
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('transactions', function(table){
    table.dropForeign('customer_id');
    table.dropForeign('type_id');
    table.dropForeign('employees');
  })
  return knex.schema.dropTableIfExists('transactions');
};
