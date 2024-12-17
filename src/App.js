import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/HomePage';
import TodoList from './components/TodoList';
import Categories from './components/CategoryPage';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Use Navbar here */}
        <h1>My Multi-Page To-Do App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
