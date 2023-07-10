import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Paste from '../Pages/Paste.jsx'
import Copy from '../Pages/Copy.jsx'
import NotFound from '../Components/NotFound.jsx'
import ImageToPdfConverter from '../Pages/PDFConverter.jsx'

export default function AllRoutes(){
    return (
        <Routes>
            <Route path='/' Component={Home} />
            <Route path='/paste' Component={Paste} />
            <Route path='/copy/:id' Component={Copy} />
            <Route path='/pdfconverter' Component={ImageToPdfConverter} />
            <Route path='/home' Component={Home} />
            <Route path='/*' Component={NotFound} />
        </Routes>
    )
}
