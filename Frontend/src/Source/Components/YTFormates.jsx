import React from 'react';
import '../Styles/YTFormater.css'

function YTFormates({ formates, videoDetails }) {
    let thumbnail = videoDetails.thumbnail.thumbnails
    thumbnail = thumbnail[thumbnail.length - 1]
    thumbnail = thumbnail.url
    let title = videoDetails.title
    let Duration = videoDetails.lengthSeconds
    let sec = Duration % 60
    Duration -= sec
    let min = ((Duration / 60) % 60)

    let hour = Math.floor(Duration / 60 / 60)

    return (
        <div className='ytformates' >
            <div className='posterClass' >
                <div>
                    <img className='thumbnail' src={thumbnail} />
                </div>
                <div>
                    <h1>{title}</h1>
                    <div>
                        <table style={{textAlign:'left'}} >
                            <tr>
                                <th>
                                    Duration:
                                </th>
                                <td>{ `${hour} hr ${min} min ${sec} sec`}</td>
                            </tr>
                            <tr>
                                <th>
                                    Views:
                                </th>
                                <td>
                                    { videoDetails.viewCount}
                                </td>
                            </tr>
                        </table>
                        {/* <p>Duration: {`${hour} hr ${min} min ${sec} sec`}</p>
                        <p>Views: {videoDetails.viewCount}</p> */}
                    </div>
                </div>
            </div>
            <table>
                <tr>
                    <td>
                        QualityLabel
                    </td>
                    <td>
                        AudioQuality
                    </td>
                    <td>
                        Container
                    </td>
                    <td>
                        HasVideo
                    </td>
                    <td>
                        HasAudio
                    </td>
                    <td>
                        Quality
                    </td>
                    <td>
                        Download
                    </td>
                </tr>
                {formates.map((formate, i) => {
                    return (
                        <tr key={i} style={{border:'1px solid black'}} >
                            <th><p>{formate.qualityLabel}</p></th>
                            <th><p>{formate.audioQuality}</p></th>
                            <th><p>{formate.container}</p></th>
                            <th><p>{formate.hasVideo?"Yes":"No"}</p></th>
                            <th><p>{formate.hasAudio ? "Yes" : "No"}</p></th>
                            <th><p>{formate.quality}</p></th>
                            <th><button style={{
                                borderRadius: '10px',
                            }} ><a target='_blank' href={formate.url} style={{textDecoration:'none', color:'white'}}  >Download</a> </button></th>
                        </tr>
                    )
                })}
            </table>
            <div>
                <h3>Steps to Download</h3>
                <p>1. Click on Download Button</p>
                <p>2. A new page open on the video controler click on 3 three dots</p>
                <p>3. After clicking you will find Download option</p>
                <p>4. Click on Download Button</p>
                <h3>Download Successfull</h3>
            </div>
        </div>
    );
}

export default YTFormates;