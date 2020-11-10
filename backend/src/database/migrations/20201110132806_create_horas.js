
exports.up = function(knex) {
    return knex.schema.createTable('horas', function(table){
        table.increments();
        table.date('data_ponto').notNullable();
        table.string('hora_entrada').notNullable();
        table.string('hora_saida').notNullable();
        table.string('horas_trabalhadas').notNullable();

        table.string('user_id').notNullable();

        table.foreign('user_id').references('id').inTable('user')
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('vendas');
};
