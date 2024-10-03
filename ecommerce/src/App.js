import React from 'react'
import { Navbar } from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import  { About } from './About'
import { Dashboard } from './Dashboard'
export const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element = {<Home />} />
                <Route path ='/about' element = { <About /> } />
                <Route path ='/dashboard' element = { <DashBoard /> } />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App; 
