import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, Operations, WordManipulation } from './pages/pageControll/PageControll'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/> 
          <Route path='/manipular-palavras' element={<WordManipulation/>}/>
          <Route path='/operacoes' element={<Operations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
