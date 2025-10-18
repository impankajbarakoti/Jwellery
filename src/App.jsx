import React from 'react'
import HomeMain from './Components/HomeMain'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Abouty from './Pages/Abouty'
import Contacty from './Pages/Contacty'
import BlogPage from './Pages/BlogPage'
import SingleBlogPost from './Pages/SingleBlogPost'
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/about" element={<Abouty />} />
        <Route path="/contact" element={<Contacty />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blog/:id" element={<SingleBlogPost/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App
