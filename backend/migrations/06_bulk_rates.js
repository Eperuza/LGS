
exports.up = function(knex) {
  return knex.schema.createTable('bulk_rates', function(table){
    table.increments('id').primary();
    table.string('category');
    table.decimal('rate', 5, 4);
    table.integer('game_id');
    table.foreign('game_id').references('id').inTable('games');
  })
};

exports.down = async function(knex) {
  await knex.schema.alterTable('bulk_rates', function(table){
    table.dropForeign('game_id');
  })
  return knex.schema.dropTableIfExists('bulk_rates');
};
