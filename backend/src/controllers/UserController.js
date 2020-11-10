const connection = require('../database/connection');

module.exports = {
    async list (request, response) {
        const users = await connection('users').select('*');
    
        return response.json(users)
    },

    async create(request, response) {
        const {nome, senha, passaporte, cargo, data_admissao, ierarquia, acesso} = request.body;

        await connection('users').insert({
            nome,
            senha,
            passaporte,
            cargo,
            data_admissao,
            ierarquia,
            acesso,
        })
    
        return response.json("cadastrado com sucesso!!");
    },

    async delete (request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const users = await connection('users')
            .where('id', user_id)
            .select('ierarquia')
            .first();

        if (users.ierarquia !== "adm") {
            return response.status(401).json({ error: 'Operation not permitted.'});   
        }
        await connection('users').where('id', id).delete();

        return response.json();
    }
};