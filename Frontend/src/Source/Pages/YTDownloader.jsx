import React, { useState } from 'react';
import Notify from '../Components/Notify';
import YTFormates from '../Components/YTFormates';

function YTDownloader(props) {
    const [link, setlink] = useState('')
    const [formates, setformate] = useState([])
    const [videoDetais, setVideoDetails] = useState()
    const [message, setmessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    function notify(m) {
        setmessage(m)
        setTimeout(() => {
            setmessage('')
        }, 5500);
    }
    
    async function Get_Formates() {
        setIsLoading(true)
        try { 
            let data = await fetch(`https://pastebin.cyclic.app/pastebin/yt/info?url=${link}`)
            data = await data.json()
            setformate(data.data.formats)
            setVideoDetails(data.data.videoDetails)
            if (data.error) {
                notify(data.error)
            }
        } catch (error) {
            notify(error.data)
        }
        setIsLoading(false)
    }
    

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px', flexDirection:'column' }}>
            {message.length>0&& Notify(message) }
            <div style={{
                background: " #1f2937",
                padding: '15px',
                borderRadius: '10px',

            }}>
                <h1 style={{ color: 'white', margin: '10px 0' }} >Paste Youtube Video Link</h1>
                <div style={{
                    display: 'flex', alignItems: 'center',
                    background: 'white',
                    borderRadius: '10px',
                    padding: "0 4px"
                }} >
                    <input
                        placeholder='Paste Link Here...'
                        style={{
                            width: '75%', border: 'none',
                            height: '30px',
                            fontSize: '18px',
                            outline: 'none'
                        }}
                        value={link}
                        onChange={(e) => setlink(e.target.value)}
                    />
                    <button
                        style={{
                            width: '25%',
                            background: 'transparent',
                            color: 'Red',
                            fontSize: '18px',

                        }}
                        onClick={Get_Formates}
                    >
                        {!isLoading?"Submit":"Finding..."}
                    </button>
                </div>
            </div>
            <div>
                {formates?.length>0 && <YTFormates formates={formates} videoDetails={videoDetais} /> }
            </div>
        </div>
    );
}

export default YTDownloader;