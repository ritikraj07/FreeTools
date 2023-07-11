const { Router } = require('express')
const YTRouter = Router()
const ytdl = require('ytdl-core');

YTRouter.get('/info', async (req, res) => {
    try { 
        const { url } = req.query;
        if (!ytdl.validateURL(url)) {
            return res.status(400).json({ error: 'Invalid YouTube URL' });
        }
        const info = await ytdl.getInfo(url);

        res.send({
            status: true,
            data: {
                formats: info.formats,
                videoDetails: info.player_response.videoDetails
            }
        })
    } catch (error) {
        res.send({
            status:false,
            data: `${error}`
        })
    }
})


YTRouter.get('/download', async (req, res) => {
    try {
        const { url } = req.query;
        
        // Validate YouTube URL
        if (!ytdl.validateURL(url)) {
            return res.status(400).json({ error: 'Invalid YouTube URL' });
        }

        // Get video information
        const info = await ytdl.getInfo(url);

        // Select the first available format (highest quality)
        const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
        
        // Set response headers
        let filename = `${info.videoDetails.title.trim(' +').split(' ').join('_')}`
        filename = filename.toString()
        
        res.header('Content-Disposition', `attachment; filename=${info.title}.mp4`);
        res.header('Content-Type', 'video/mp4');

        // Pipe the video stream to the response
        ytdl(url, { format: format }).pipe(res);
    } catch (error) {
        // console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});



module.exports = YTRouter;