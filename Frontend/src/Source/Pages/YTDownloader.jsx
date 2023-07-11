import React, { useState } from 'react';
import Notify from '../Components/Notify.jsx';
import YTFormates from '../Components/YTFormates.jsx';

function YTDownloader() {
    const [link, setLink] = useState('');
    const [formats, setFormats] = useState([]);
    const [videoDetails, setVideoDetails] = useState(null);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function notify(m) {
        setMessage(m);
        setTimeout(() => {
            setMessage('');
        }, 5500);
    }

    async function getFormats() {
        setIsLoading(true);
        try {
            let data = await fetch(`https://pastebin.cyclic.app/yt/info?url=${link}`);
            data = await data.json();
            // console.log('++++=>', data);
            if (data.error) {
                notify(data.error);
            } else {
                setFormats(data.data.formats);
                setVideoDetails(data.data.videoDetails);
            }

            
        } catch (error) {
            notify(error.message);
        }
        setIsLoading(false);
    }

    console.log(formats)
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px', flexDirection: 'column' }}>
            {message.length > 0 && Notify(message)}
            <div style={{
                background: "#1f2937",
                padding: '15px',
                borderRadius: '10px',
            }}>
                <h1 style={{ color: 'white', margin: '10px 0' }}>Paste Youtube Video Link</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    background: 'white',
                    borderRadius: '10px',
                    padding: "0 4px"
                }} >
                    <input
                        placeholder='Paste Link Here...'
                        style={{
                            width: '75%',
                            border: 'none',
                            height: '30px',
                            fontSize: '18px',
                            outline: 'none'
                        }}
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <button
                        style={{
                            width: '25%',
                            background: 'transparent',
                            color: 'red',
                            fontSize: '18px',
                        }}
                        onClick={getFormats}
                    >
                        {!isLoading ? "Submit" : "Finding..."}
                    </button>
                </div>
            </div>
            <div>
                {formats.length > 0 && <YTFormates formates={formats} videoDetails={videoDetails} />}
            </div>
        </div>
    );
}

export default YTDownloader;
