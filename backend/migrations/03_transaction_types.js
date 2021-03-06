
exports.up = function(knex) {
  return knex.schema.createTable('transaction_types', function(table){
    table.increments('id').primary();
    table.string('name');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('transaction_types');
};
