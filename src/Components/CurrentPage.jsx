import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import AddPage from './AddPage';
import EditPage from './EditPage';
import MainComponent from './MainComponent';

function CurrentPage() {


    const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
        <Route path='/' element={<MainComponent/>} />
        <Route path='/addcontact' element={<AddPage/>} />
        <Route path='/editcontact/:id' element={<EditPage/>} />
    </Routes>
  )
}

export default CurrentPage