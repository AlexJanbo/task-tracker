import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Homepage from './pages/LoggedOut/Homepage'
import Dashboard from './pages/LoggedIn/Dashboard'
import Login from './pages/LoggedOut/Login'
import Signup from './pages/LoggedOut/Signup'
import { SingleTask } from './pages/LoggedIn/SingleTask'
import EditTask from './pages/LoggedIn/EditTask'
import Tasks from './pages/LoggedIn/Tasks'
import Projects from './pages/LoggedIn/Projects'
import UserProfile from './pages/LoggedIn/UserProfile'
import SingleProject from './pages/LoggedIn/SingleProject'
import EditProject from './pages/LoggedIn/EditProject'
import EditUser from './pages/LoggedIn/EditUser'
import ChangePassword from './pages/LoggedIn/ChangePassword'
import ManageRoles from './pages/LoggedIn/ManageRoles'
import { ThemeProvider } from '@mui/private-theming'
import { lightTheme, darkTheme} from './theme'



export default function App() {
    
    const [isDarkMode, setIsDarkMode] = useState(false)
    
    return(
        <>
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Router>
                    <Routes>
                        <Route path='/' element={<Homepage />}/>    
                        <Route path='/login' element={<Login />}/>
                        <Route path='/signup' element={<Signup />}/>
                        <Route path='/dashboard' element={<Dashboard />}/>
                        <Route path='/manage-roles' element={<ManageRoles />}/>
                        <Route path='/projects' element={<Projects />} />
                        <Route path='/tasks' element={<Tasks />} />
                        <Route path='/user-profile' element={<UserProfile />} />
                        <Route exact path='/tasks/:taskId' element={<SingleTask />}/>
                        <Route exact path='/projects/:projectId' element={<SingleProject />}/>
                        <Route exact path='/edit-task/:taskId' element={<EditTask />} />
                        <Route exact path='/editProject/:projectId' element={<EditProject />} />
                        <Route path='/edit-user' element={<EditUser />} />
                        <Route path='change-password' element={<ChangePassword />} />
                    </Routes>    
                </Router>
            </ThemeProvider>
        </>
    )
}