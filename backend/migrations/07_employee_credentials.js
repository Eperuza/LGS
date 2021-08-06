exports.up = function(knex) {
  return knex.schema.createTable('employee_credentials', function(table){
    table.increments('id').primary();
    table.string('pin');
    table.integer('employee_id')
    table.foreign('employee_id').references('id').inTable('employees');
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('employee_credentials', function(table){
    table.dropForeign('employee_id');
  })
  return knex.schema.dropTableIfExists('employee_credentials');
};