import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './components/NotFound'
import HomePage from './pages/HomePage'
import PropertiesPage from './pages/PropertiesPage'
import { Toast } from 'react-bootstrap';
import LoginPage from './pages/LoginPage';
import ActivatePage from './pages/ActivatePage'
import RegisterPage from './pages/RegisterPage'
import PropertyDetailPage from './pages/PropertyDetailPage';
import PropertyCreatePage from './pages/PropertyCreatePage';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className='py-3'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/properties' element={<PropertiesPage />} />
            <Route path='/property/:slug' element={<PropertyDetailPage />} />
            <Route path='/property/create' element={<PropertyCreatePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/activate/:uid/:token' element={<ActivatePage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <ToastContainer theme='dark' />
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
