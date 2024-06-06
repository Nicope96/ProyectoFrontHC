
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import MenuForm from './Components/MenuForm/MenuForm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/menu" element={<MenuForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

