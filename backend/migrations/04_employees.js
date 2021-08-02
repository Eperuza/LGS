
exports.up = function(knex) {
  return knex.schema.createTable('employees', function(table){
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.string('pin');
    table.boolean('manager').defaultTo(false)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('employees');
};
