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
    createdAt: { type: Date, expires: 86400, default: Date.now },
}, {
    timestamps: true,
})
PasteBinSchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });


const PasteBin = model('PasteBin', PasteBinSchema)
module.exports = PasteBin


