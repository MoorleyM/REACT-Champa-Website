import { Routes, Route } from 'react-router-dom'

import Home from './routes/index/index.component';
import Navbar from './routes/navigation/navbar.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
