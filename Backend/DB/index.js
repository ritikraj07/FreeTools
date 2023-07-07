const {connect} = require('mongoose')
const config = require('../Config')

async function ConnectDatabase() {
    try {
        await connect(config.DB);
        // await connect('mongodb://localhost:27017')
        console.log('Database Connected')
    } catch (error) {
        console.log('Database not connected', error)
    }
}
module.exports = ConnectDatabase

