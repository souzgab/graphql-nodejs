const knexfile = require('../knexfile');
const knex = require('knex')(knexfile);
module.exports = knex

// knex('users').insert({
//     name: 'Teste',
//     email: 'teste@teste.com',
//     password: 'teste'
// }).then( data => console.log(data))

// knex('users').select('*').then(r => console.log(r))