const connection = require('../database/connection');
const { create } = require('./UserController');

module.exports = {
    async create(request, response) {
        const { passaporte } = request.body;

        const user = await connection('users')
        .where('passaporte', passaporte)
        .select('nome')
        .first();

        if(!user) {
            return response.status(400).json({ error: 'Não existe Usuario com esse passaporte'});
        }

        return response.json(user);
    }
}