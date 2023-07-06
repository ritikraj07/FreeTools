import React, { useState } from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CONTENT } from '../Redux/Constant';
import "../Styles/Paste.css"
import { Add_Content } from '../Redux/Action';
function Paste({ setwindow }) {
    let cont = useSelector((store) => {
        return store.content
    })
    const [content, setContent] = useState("")
    const [password, setPassword] = useState(null)
    let dispatch = useDispatch();
    const handleContentChange = (value) => {
        setContent(value)
    };
    
    
    return (
        <div className='Paste' >
            <h4 style={{ color: 'blue' }} >New Paste</h4>
            
            <ReactQuill
                value={content}
                onChange={handleContentChange}
                modules={{
                    toolbar: false,
                }}
                className='pasteContainer'
                placeholder='PASTE HERE...'
            />
            <p style={{ color: 'red', fontSize: '12px' }} >You can secure you code by adding password</p>
            <input className='input_password' placeholder='PASSWORD' onChange={setPassword} />
            <br></br>
            
            <button onClick={() => {
                dispatch(Add_Content({content: content, password: password}))
            }}
                className='submit_btm'
            >Submit</button>

        </div>
    );
}

export default Paste;
