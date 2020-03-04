'use strict'

const MongoClient = require('mongodb')

const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

// const uri = `mongodb+srv://${DB_USER}:${DB_PASSWD}@cluster0-0y7tv.mongodb.net/test?retryWrites=true&w=majority`
const uri = `mongodb://${DB_USER}:${DB_PASSWD}@${DB_HOST}:${DB_PORT}`

let connection

async function connectDB() {
    if (connection) return connection
    let client

    try {
        client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        connection = client.db(DB_NAME)
        console.log(client)
    } catch (error) {
        console.log('No se pudo conectar a la base de datos de mongo', uri, error)
        process.exit(1)
    }
    return connection
}

module.exports = connectDB