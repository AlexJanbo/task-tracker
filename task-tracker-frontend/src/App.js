import React from 'react'
import Navbar from './components/Navbar'
import { Box, Card, Stack } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Homepage from './pages/Homepage'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'


export default function App() {
    return(
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Homepage />}/>    
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/dashboard' element={<Dashboard />}/>
                </Routes>    
            </Router>
        </>
    )
}