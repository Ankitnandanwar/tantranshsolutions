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
import AdminPanel from './pages/AdminPanel'
import JobPanel from './pages/JobPanel'
import AdminLogin from './pages/AdminLogin'
import JobPostPanel from './pages/JobPostPanel'
import ViewJobPost from './pages/ViewJobPost'


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
        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admin-dashboard' element={<AdminPanel/>}/>
        <Route path='/job-dashboard' element={<JobPanel/>}/>
        <Route path='/jobpost-dashboard' element={<JobPostPanel/>}/>
        <Route path='/view-jobpost-dashboard' element={<ViewJobPost/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App