import React, { useState } from 'react';
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Copy.css'
import { useNavigate, useParams } from 'react-router-dom';
import copyToClipboard from '../Services/CopyToClipboard';
import Notify from '../Components/Notify';
import { ADD_CONTENT } from '../Redux/Constant';
function Copy() {
    const [ps, setps] = useState(null)
    const [ID, setID] = useState('')
    const [notic, setnotic] = useState('')
    const [state, setstate] = useState(true)
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
  let dispatch = useDispatch() 
    
    function Get_Content() {
        fetch(`https://pastebin.cyclic.app/pastebin/${ID}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('===> res =>', res)
                if (res.status) {
                    dispatch({
                        type: ADD_CONTENT,
                        payload: res.data
                    })
                    setstate(false)
                } else {
                    setnotic('wrong Id or may be Id expire')
                }

            }).catch((err) => {
                console.log(err)
                setnotic(err)
            })
        setnotic("")
    }
    

    return (
        <div className="CopyPaste">
            {notic.length>0 && Notify(notic) }
           {state && <div className='idDiv' >
                <p>Please Enter ID </p>
                <input placeholder='Enter ID' onChange={(e)=>setID(e.target.value)} />
                <button onClick={Get_Content} >Search</button>
            </div>}

            {!state && password !== null && ps != password && <div className='passwordDiv' >
                <p>This content is secure by password</p>
                <input placeholder='Please enter password Here...' onChange={(e) => setps(e.target.value)} />
            </div>}

            {!state && (password === null || ps == password) && 
                <div>
                    <div
                        className="output-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <div style={{display:'flex'}}>
                        
                    <button className='button-15' onClick={() => copyToClipboard(actualContent)}>Copy Text</button>
                    <button className='button-15' onClick={() => copyToClipboard(id)}>Copy Id</button>
                        <button className='button-15' onClick={() => { navigate('/paste') }}>Paste New</button>
                        </div>
                    </div>
            }
            
        </div>
    );
}

export default Copy;


