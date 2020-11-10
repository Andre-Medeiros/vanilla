
exports.up = function(knex) {
    return knex.schema.createTable('estoque', function(table){
        table.increments();
        table.string('img');
        table.string('nome_produto').notNullable();
        table.string('quantidade').notNullable();
        table.date('data_alteracao').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('user')
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('estoque');
};
