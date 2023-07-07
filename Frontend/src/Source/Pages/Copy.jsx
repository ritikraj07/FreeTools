import React from 'react';
import "react-quill/dist/quill.snow.css";
import { useSelector } from 'react-redux';
import '../Styles/Copy.css'
import { useParams } from 'react-router-dom';
function Copy() {
    let { id } = useParams()
    let ID = useSelector((store) => {
        return store.id
    })
    console.log('id===>', id, ID)
    if (id !== ID) {
        console.log('lasfj asjlf')
    }
    let content = useSelector((store) => {
        return store.content;
    })
    let password = useSelector((store) => {
        return store.password
    })

   



   

    
        const copyToClipboard = (content) => {
            const textToCopy = content;
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
            <button className='button-15' onClick={() => {}}>Paste New</button>
        </div>
    );
}

export default Copy;