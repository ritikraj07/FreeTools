import React, { useState } from 'react';
import '../Styles/Navbar.css'
import { useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { ADD_CONTENT } from '../Redux/Constant';
function Navbar(props) {
    const [id, setid] = useState('')
    let dispatch = useDispatch()
    let navigate = useNavigate()
    const location = useLocation();
    const currentPath = location.pathname;
   
    const activeStyle = {
        backgroundColor: 'black',
    };

return (
    <div className='Navbar' >

        <div>
            <NavLink to='/' style={{textDecoration:'none'}}>
                <h1 className='logo' >FreeTools</h1>
            </NavLink>
            <div>
               
             
            </div>

        </div>

        <div>

        </div>

        {/* <div style={{display:'flex', alignItems:'center'}
                <h1 style={{ fontSize: 22, marginRight:'20px' }} >PASTEBIN</h1>
                <NavLink style={{textDecoration:'none', color:'red'}} to='/paste'> Paste New </NavLink>
            </div>
            <div>
                <input onChange={(e)=>setid(e.target.value)} placeholder='Enter Id Here...' />
                <button onClick={Get_Content} >Search</button>
            </div> */}

    </div>
);
}

export default Navbar;