import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import DeletePage from './pages/DeletePage';
import UpdatePage from './pages/UpdatePage';
import CreatePage from './pages/CreatePage';
import SearchPage from './pages/SearchPage';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/deletestudent" element={<DeletePage/>}/>
      <Route path="/updatestudent/:studentId" element={<UpdatePage/>}/>
      <Route path="/createstudent" element={<CreatePage/>}/>
      <Route path="/search" element={<SearchPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
