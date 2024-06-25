import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../App.css';

function Contact() {
    return (
        <div>

            
        </div>
        
    );
}
function App() {
    return (
        <Routes>
            <Route path="/contact" element={<Contact />} />
        </Routes>

    );
}

export default App;