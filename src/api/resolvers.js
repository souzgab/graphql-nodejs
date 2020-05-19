const db = require('../config/database')

module.exports = {
    Query: {
        async getUser(_, {id}){
            return await db('users').where({id: id}).first();
        },
        async getUsers(){
            return await db('users')
        }
    },
    Mutation: {
        async createUser(_,{input}){
            const x = await db('users').insert({
                name: input.name,
                email: input.email,
                password: input.password
            })

            const id = x[0]
            return await db('users').where({id: id}).first()
        }
    }
}