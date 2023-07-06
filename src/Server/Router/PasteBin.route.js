const { Router } = require('express')
const { Get_Content, Add_Content } = require('../Controller/PasteBin.Controller')

const PasteBinRouter = Router()

PasteBinRouter.get('/:id',async (req, res) => {
    try {
        let id = req.params.id
        let content = await Get_Content(id);
        res.send({
            status: true, 
            data: content
        })
    } catch (error) {
        res.send({
            status: false,
            data: `${error}`
        })
    }
})

PasteBinRouter.post('/', async (req, res) => {
    try {
        let content = req.body
        console.log('content ===>', content)
        content = await Add_Content(content);
        res.send({
            status: true,
            data: content
        })
     } catch (error) {
        res.send({
            status: false,
            data: `${error}`
        })
    }
})




module.exports = PasteBinRouter