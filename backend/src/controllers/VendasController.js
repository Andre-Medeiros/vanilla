const connection = require('../database/connection');

module.exports = {
    async list(request, response) {
        const { page = 1 } = request.query;
        const [count] = await connection('vendas').count();

        const vendas = await connection('vendas')
        .join('users', 'users.id', '=', 'vendas.user_id')
        .limit(30)
        .offset((page -1)* 30)
        .select([
            'vendas.*', 
            'users.nome', 
            'users.passaporte'
        ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(vendas);
    },

    async create (request, response) {
        const { produto, quantidade, desconto, valor_venda } = request.body;
        const user_id = request.headers.authorization;

        const [id]= await connection('vendas').insert({
            produto,
            quantidade,
            desconto,
            valor_venda,
            user_id,
        });

        return response.json({id});
    },

    async delete (request, response) {
        const { id } = request.params;
        const user_id = request.headers.authorization;

        const vendas = await connection('vendas')
            .where('id', id)
            .select('user_id')
            .first();

        if (vendas.user_id !== user_id) {
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('vendas').where('id', id).delete();

        return response.status(204).send();
    }
}