exports.up = function(knex) {
    return knex.schema.createTable('vendas', function(table){
        table.increments();
        
        table.string('produto').notNullable();
        table.string('quantidade').notNullable();
        table.string('desconto').notNullable();
        table.string('valor_venda').notNullable();

        
        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('user');
      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('vendas');
};
