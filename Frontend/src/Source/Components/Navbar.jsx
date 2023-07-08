import React, { useState } from 'react';
import '../Styles/Navbar.css'
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ADD_CONTENT } from '../Redux/Constant';
function Navbar(props) {
    const [id, setid] = useState('')
    let dispatch = useDispatch()
    let navigate = useNavigate()
    
    function Get_Content() {
        fetch(`https://pastebin.cyclic.app/pastebin/${id}`)
            .then((res) => res.json())
            .then((res) => {
                console.log('===> res =>', res)
                if (res.status) {
                    dispatch({
                        type: ADD_CONTENT,
                        payload: res.data
                    })
                    navigate('/copy')
                } else {
                    alert('wrong Id or may be Id expire')
                }
               
            }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div className='Navbar' >
            <div style={{display:'flex', alignItems:'center'}} >
                <h1 style={{ fontSize: 22, marginRight:'20px' }} >PASTEBIN</h1>
                <NavLink style={{textDecoration:'none', color:'red'}} to='/paste'> Paste New </NavLink>
            </div>
            <div>
                <input onChange={(e)=>setid(e.target.value)} placeholder='Enter Id Here...' />
                <button onClick={Get_Content} >Search</button>
            </div>

        </div>
    );
}

export default Navbar;