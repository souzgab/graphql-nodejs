const express = require('express')
const graphqlHTTP = require('express-graphql')
const {buildSchema} = require('graphql')
const schema = require('./src/api/schema')

const app = express();

app.use('/api', graphqlHTTP({
    schema: schema, 
    graphiql: true
}))

app.listen(4004, () => console.log('Server Online'))