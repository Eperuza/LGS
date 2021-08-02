
exports.up = function(knex) {
  return knex.schema.createTable('games', function(table){
    table.increments('id').primary();
    table.string('name');
    table.decimal('cash_rate', 4, 3);
    table.decimal('credit_rate', 4, 3);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games')
};
