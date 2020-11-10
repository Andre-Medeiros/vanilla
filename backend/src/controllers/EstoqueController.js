const { select } = require('../database/connection');
const connection = require('../database/connection');

module.exports = {
    async list (request, response) {
        const estoque = await connection('estoque').select("*");
        
        return response.json(estoque);
    },

    async create (request, response) {
        const { img, nome_produto, quantidade, data_alteracao} = request.body;
        const user_id = request.headers.authorization;

        const [id] = await connection('estoque').insert({
            img,
            nome_produto,
            quantidade,
            data_alteracao,
            user_id
        });
        return response.json({id});
    }
}