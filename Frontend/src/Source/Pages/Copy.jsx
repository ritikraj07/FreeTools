import React, { useEffect, useState } from 'react';
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/Copy.css'
import { useNavigate, useParams } from 'react-router-dom';
import copyToClipboard from '../Services/CopyToClipboard';
import Notify from '../Components/Notify';
import { ADD_CONTENT } from '../Redux/Constant';
function Copy() {
    const [ps, setps] = useState(null)
    const [notic, setnotic] = useState('')
    const [state, setstate] = useState(false)

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
    let Store_id = useSelector((store) => {
        return store.id
    })

    let dispatch = useDispatch() 

    let { id } = useParams()
    useEffect(() => {
        if (id===Store_id) {
            setps(password)
            setstate(true)
        } else {
            Get_Content(id)
        }
        
    }, [])
    useEffect(() => {
        setnotic('')
    },[ps])
   
    
   
    
    function Get_Content(id) {
        fetch(`https://pastebin.cyclic.app/pastebin/${id}`)
            .then((res) => res.json())
            .then((res) => {
                
                if (res.status) {
                    dispatch({
                        type: ADD_CONTENT,
                        payload: res.data
                    })
                    setstate(true)
                } else {
                    setnotic('wrong Id or may be Id expire')
                }

            }).catch((err) => {
                
                setnotic(err)
            })
        
    }

    return (
        <div className="CopyPaste">
            {notic.length>0 && Notify(notic) }

            
            {state && password !== ps ? <div className='passwordDiv' >
                <p>This content is secure by password</p>
                <input placeholder='Please enter password Here...' onChange={(e) => setps(e.target.value)} />
            </div>:<div>
                    <div
                        className="output-content"
                        dangerouslySetInnerHTML={{ __html: content }}
                    />
                    <div style={{display:'flex'}}>
                        
                    <button className='button-15' onClick={() => copyToClipboard(actualContent)}>Copy Text</button>
                        <button className='button-15' onClick={() => { navigate('/paste') }}>Paste New</button>
                        </div>
                    </div>
            }
            
        </div>
    );
}

export default Copy;


