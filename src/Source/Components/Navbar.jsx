import React from 'react';
import '../Styles/Navbar.css'
function Navbar(props) {
    return (
        <div className='Navbar' >
            <div>
            <h1 style={{fontSize:22}} >PASTEBIN</h1>

            </div>
            <div>
                <input placeholder='Enter Id Here...' />
            </div>

        </div>
    );
}

export default Navbar;