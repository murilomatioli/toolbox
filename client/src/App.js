import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, WordManipulation } from './pages/pageControll/PageControll'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/home' element={<Home/>}/> 
          <Route path='ferramentas/manipular-palavras' element={<WordManipulation/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
