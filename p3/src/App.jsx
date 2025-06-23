import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import AddBlog from './view/AddBlog';
import AddDelete from './view/AddDelete';
import UpdateBlog from './view/UpdateBlog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/addBlog' element={<AddBlog />} />
        <Route path='/updateblog' element={<AddDelete/>} />
        <Route path='/edit/:id' element={<UpdateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
