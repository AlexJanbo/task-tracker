import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import Homepage from './pages/LoggedOut/Homepage'
import Dashboard from './pages/LoggedIn/Dashboard'
import Login from './pages/LoggedOut/Login'
import Signup from './pages/LoggedOut/Signup'
import { SingleTaskPage } from './pages/LoggedIn/SingleTaskPage'
import EditTaskPage from './pages/LoggedIn/EditTaskPage'
import Tasks from './pages/LoggedIn/Tasks'
import Projects from './pages/LoggedIn/Projects'
import UserProfile from './pages/LoggedIn/UserProfile'
import UserSettings from './pages/LoggedIn/UserSettings'
import SingleProjectPage from './pages/LoggedIn/SingleProjectPage'
import EditProjectPage from './pages/LoggedIn/EditProjectPage'



export default function App() {
    return(
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Homepage />}/>    
                    <Route path='/login' element={<Login />}/>
                    <Route path='/signup' element={<Signup />}/>
                    <Route path='/dashboard' element={<Dashboard />}/>
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/tasks' element={<Tasks />} />
                    <Route path='/user-profile' element={<UserProfile />} />
                    <Route path='/user-settings' element={<UserSettings />} />
                    <Route exact path='/tasks/:taskId' element={<SingleTaskPage />}/>
                    <Route exact path='/projects/:projectId' element={<SingleProjectPage />}/>
                    <Route exact path='/editTask/:taskId' element={<EditTaskPage />} />
                    <Route exact path='/editProject/:projectId' element={<EditProjectPage />} />
                </Routes>    
            </Router>
        </>
    )
}