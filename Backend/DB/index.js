const {connect} = require('mongoose')
const config = require('../Config')

async function ConnectDatabase() {
    try {
        await connect(config.DB);
        console.log('Database Connected')
    } catch (error) {
        console.log('Database not connected', error)
    }
}
module.exports = ConnectDatabase
