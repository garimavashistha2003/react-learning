import { useState } from 'react'

import PokimonApi from './api/PokimonApi.JSX'
import Navbar from './Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Ability from './Pages/Ability/Ability';


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/pokemon" element={<PokimonApi  searchTerm={searchTerm} />} />
        <Route path = "/abilities" element={<Ability/>}/>
      </Routes>
      
    </div>
  )
}

export default App
