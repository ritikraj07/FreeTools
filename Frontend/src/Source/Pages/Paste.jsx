import React, { useState, useRef } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector} from 'react-redux';
import "../Styles/Paste.css"
import { Add_Content } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import copyToClipboard from '../Services/CopyToClipboard';
function Paste() {
    const [content, setContent] = useState("")
    const [password, setPassword] = useState(null)
    const quillRef = useRef(null);
    let id = useSelector((store) => {
        return store.id
    })
    
    let navigate = useNavigate()
    let dispatch = useDispatch();
    const handleContentChange = (value) => {
        setContent(value)
    };
    
    function Post_Content() {
        let plainText = content;
        if (quillRef.current) {
            plainText = quillRef.current.getEditor().getText();
        }
        dispatch(Add_Content({ content: content, password: password, actualContent: plainText }))
    }
   
    
    return (
        <div className='Paste' >
            <h4 style={{ color: 'blue' }} >New Paste</h4>
            <p style={{color:'red', fontSize:10}} >Note: It will automatically delete after 10 minute of pasting</p>
            <ReactQuill
                ref={quillRef}
                value={content}
                onChange={handleContentChange}
                modules={{
                    toolbar: false,
                }}
                className="pasteContainer"
                placeholder="PASTE HERE..."
            />
            <p style={{ color: 'red', fontSize: '12px' }} >You can secure you code by adding password</p>
            <input className='input_password' placeholder='PASSWORD' onChange={(e)=> setPassword(e.target.value)} />
            <br></br>
            {id && <>
                <button onClick={() => copyToClipboard(id)} className='button-15'>Click To Copy ID</button>
                </>
            }
            <button onClick={Post_Content} className='button-15'>Submit</button>

        </div>
    );
}

export default Paste;
