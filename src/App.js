import { Routes, Route } from 'react-router-dom'

import Home from './routes/index/index.component';
import Layout from './routes/body/layout.component';
import Contact from './routes/contact/contact.component';
import Menu from './routes/menu/menu.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
