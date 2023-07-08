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
    actualContent:String
}, {
    timestamps: true,
})
PasteBinSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 });


const PasteBin = model('PasteBin', PasteBinSchema)
module.exports = PasteBin