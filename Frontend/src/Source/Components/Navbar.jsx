import React, { useState } from 'react';
import '../Styles/Navbar.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ADD_CONTENT } from '../Redux/Constant';
function Navbar(props) {
    const [id, setid] = useState('')
    let dispatch = useDispatch()
    let navigate = useNavigate()
    
    function Get_Content() {
        fetch(`https://pastebin.cyclic.app/pastebin/${id}`)
            .then((res) => res.json())
            .then((res) => {
                // console.log('===> res =>', res)
                dispatch({
                    type: ADD_CONTENT,
                    payload: res.data
                })
                navigate('/copy')
        })
    }
    return (
        <div className='Navbar' >
            <div>
                <h1 style={{ fontSize: 22 }} >PASTEBIN</h1>
                <a href='/paste'>Paste</a>
            </div>
            <div>
                <input onChange={(e)=>setid(e.target.value)} placeholder='Enter Id Here...' />
                <button onClick={Get_Content} >Search</button>
            </div>

        </div>
    );
}

export default Navbar;