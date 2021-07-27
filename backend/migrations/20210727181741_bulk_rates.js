
exports.up = function(knex) {
  return knex.schema.createTable('bulk_rate', function(table){
    table.increments('id').primary();
    table.string('category');
    table.decimal('rate', 5);
    table.integer('game_id');
    table.foreign('game_id').references('id').inTable('games');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('games');
};
