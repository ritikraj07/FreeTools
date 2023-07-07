import React from 'react';
import "react-quill/dist/quill.snow.css";
import { useSelector } from 'react-redux';
import '../Styles/Copy.css'
import { useNavigate, useParams } from 'react-router-dom';
import copyToClipboard from '../Services/CopyToClipboard';
function Copy() {
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
    // if (password) {
    //     console.log('password ==>', password)
    // }

    return (
        <div className="CopyPaste">
            {/* <pre> */}
            <div
                className="output-content"
                dangerouslySetInnerHTML={{ __html: content }}
                />
                
            {/* </pre> */}
            <button className='button-15' onClick={() => copyToClipboard(actualContent)}>Copy Text</button>
            <button className='button-15' onClick={() => copyToClipboard(id)}>Copy Id</button>
            <button className='button-15' onClick={() => {navigate('/paste')}}>Paste New</button>
        </div>
    );
}

export default Copy;


