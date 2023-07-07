import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Paste from '../Pages/Paste.jsx'
import Copy from '../Pages/Copy.jsx'

export default function AllRoutes(){
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/paste' Component={Paste} />
            <Route path='/copy/:id' Component={Copy} />
        </Routes>
    )
}
