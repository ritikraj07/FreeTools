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
        id = null
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
            <h4 style={{ color: '#1f2937', textAlign:'left' }} >New Paste</h4>
            <p style={{color:'red', fontSize:10}} >Note: It will automatically delete after <b> 24 Hours </b> of pasting</p>
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
            <p style={{ color: 'red', fontSize: '12px' }} >You can secure your content by adding password</p>
            <input type='password' className='input_password' placeholder='PASSWORD' onChange={(e)=> setPassword(e.target.value)} />
            <div style={{display:'flex'}}>
                <button onClick={Post_Content} className='pasteBtm'>Submit</button>&nbsp;&nbsp;&nbsp;
            {id && <>
                
                    <button className='pasteBtm' onClick={() => copyToClipboard('https://free-tools-digital-india.vercel.app/copy/'+id)} >Copy Link</button>
                </>
            }
            </div>
        </div>
    );
}

export default Paste;
