import * as React from 'react'
import { Routes, Route, Link, Navigate } from "react-router-dom"

import Homepage from "./Main/new/Homepage/homepage"
import About from "./Main/new/About/about"
import Client from "./Main/new/Client/client"
import Notfound from "./Main/new/Notfound/notfound"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='*' element={<Notfound />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/client" element={<Client />} />
          <Route 
            path="/"
            element={<Navigate to="/home"/>}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
