
import Home from './pages/Home/Home';

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './pages/Error/Error';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
