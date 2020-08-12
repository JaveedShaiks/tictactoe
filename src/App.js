import React from 'react';
import './App.css';
import { Login } from './components/Login/Login';
import { Header } from './components/Header/header';
function App() {
  return (
    <div className="mainContainer">
      <Header />
      <Login />
    </div>
  );
}

export default App;
