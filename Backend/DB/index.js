const {connect} = require('mongoose')
const config = require('../Config')

async function ConnectDatabase() {
    try {
        // await connect('mongodb://127.0.0.1:27017/pastebin')
        await mongoose.connect(config.DB);
        console.log('Database Connected')
    } catch (error) {
        console.log('Database not connected')
    }
}

module.exports = ConnectDatabase