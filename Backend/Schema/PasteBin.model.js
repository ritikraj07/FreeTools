const { model, Schema } = require('mongoose')

const PasteBinSchema = new Schema({
    content: {
        require: true,
        type: String
    },
    password: {
        type: String,
        default: null
    },
    actualContent: String,
    createdAt: { type:Date, expires: 30, default:new Date() }
})
// PasteBinSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });


const PasteBin = model('PasteBin', PasteBinSchema)
module.exports = PasteBin


