exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('nome').notNullable();
    table.string('senha').notNullable();
    table.string('passaporte').notNullable();
    table.string('cargo');
    table.date('data_admissao');
    table.string('ierarquia').notNullable();
    table.boolean('acesso').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
