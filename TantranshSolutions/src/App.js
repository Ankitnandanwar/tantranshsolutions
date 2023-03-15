import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ErrorPage from './components/ErrorPage/ErrorPage'
import ContactUs from './pages/Contact'
import AboutUs from './pages/About'
import HomeMain from './pages/HomeMain'
import Carrers from './pages/Carrers'
import ApplynowMain from './pages/Applynow'
import ThankupageMain from './pages/Thankupage'
import Dashboard from './components/Dashboard/dashboard'
// import DummyImg from './components/uploadImageDummy/DummyImg'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeMain/>} />
        <Route path='/about' element={<AboutUs/>}/>
        <Route exact path='*' element={<ErrorPage/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/carrers' element={<Carrers/>}/>
        <Route path='/apply-now' element={<ApplynowMain/>}/>
        <Route path='/thanku' element={<ThankupageMain/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        {/* <Route path='/dummyimg' element={<DummyImg/>}/> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App