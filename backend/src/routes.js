const express = require('express');
const UserController = require('./controllers/UserController');
const VendasController = require('./controllers/VendasController');
const EstoqueController = require('./controllers/EstoqueController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

/** todos os usuarios */
routes.get('/users', UserController.list);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);

/** todas as vendas */
routes.get('/vendas', VendasController.list);
routes.post('/vendas', VendasController.create);
routes.delete('/vendas/:id', VendasController.delete);

routes.get('/estoque', EstoqueController.list);
routes.post('/estoque', EstoqueController.create);

module.exports = routes;