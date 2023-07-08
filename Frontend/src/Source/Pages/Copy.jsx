import React, { useState } from 'react';
import "react-quill/dist/quill.snow.css";
import { useSelector } from 'react-redux';
import '../Styles/Copy.css'
import { useNavigate, useParams } from 'react-router-dom';
import copyToClipboard from '../Services/CopyToClipboard';
function Copy() {
    const [ps, setps] =useState(null)
    let id = useSelector((store) => {
        return store.id
    })
    let navigate = useNavigate()
    let actualContent = useSelector((store) => {
        return store.actualContent
    })
    let content = useSelector((store) => {
        return store.content;
    })
    let password = useSelector((store) => {
        return store.password
    })
   

    return (
        <div className="CopyPaste">
            {ps != password ? <div className='passwordDiv' >
                <p>This content is secure by password</p>
                <input placeholder='Please enter password Here...' onChange={(e)=>setps(e.target.value)} />
            </div> :
                <>
            <div
                className="output-content"
                dangerouslySetInnerHTML={{ __html: content }}
                />
                
            <button className='button-15' onClick={() => copyToClipboard(actualContent)}>Copy Text</button>
                    <button className='button-15' onClick={() => copyToClipboard(id)}>Copy Id</button> </>}
            <button className='button-15' onClick={() => {navigate('/paste')}}>Paste New</button>
        </div>
    );
}

export default Copy;


