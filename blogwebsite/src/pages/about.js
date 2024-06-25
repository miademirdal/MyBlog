import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';

function About() {
    return (
        <div>

            
        </div>
        
    );
}
function App() {
    return (
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>

    );
}

export default App;