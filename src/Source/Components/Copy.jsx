import React from 'react';
import "react-quill/dist/quill.snow.css";
import { useSelector } from 'react-redux';
import '../Styles/Copy.css'
function Copy({setwindow}) {
    let content = useSelector((store) => {
        return store.content;
    })
    let password = useSelector((store) => {
        return store.password
    })
    let id = useSelector((store) => {
        return store.id
    })
    

    
        const copyToClipboard = (content) => {
            const textToCopy = content; // Replace with the text you want to copy

            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    console.log('Text copied to clipboard:', textToCopy);
                })
                .catch((error) => {
                    console.error('Error copying text to clipboard:', error);
                });
        };

    return (
        <div className="CopyPaste">
            <div
                className="output-content"
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <button className='button-15' onClick={() => copyToClipboard(content)}>Copy Text</button>
            <button className='button-15' onClick={() => copyToClipboard(id)}>Copy Id</button>
            <button className='button-15' onClick={() => setwindow(true)}>Paste New</button>
        </div>
    );
}

export default Copy;