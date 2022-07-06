import React from 'react'
import Navbar from './components/Navbar'
import { Box, Card, Stack } from '@mui/material'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import { ToastContainer } from 'react-toastify'
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
                <Stack direction="column" spacing={2}>
                    <Box
                        height="400px"
                        bgcolor="green"
                    >
                        <Card>

                        </Card>
                    </Box>
                    <Box
                        height="100px"
                        bgcolor="darkgreen"
                    >
                    </Box>
                    <Box
                        height="400px"
                        bgcolor="blue"
                    >
                    </Box>
                    <Box
                        height="400px"
                        bgcolor="red"
                    >
                    </Box>
                    <Box
                        height="400px"
                        bgcolor="purple"
                    >
                    </Box>
                </Stack>
            </Router>
        </>
    )
}