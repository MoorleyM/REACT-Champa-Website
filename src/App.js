import { Routes, Route } from 'react-router-dom'

import Home from './routes/index/index.component';
import Body from './routes/body/body.component';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Body />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
