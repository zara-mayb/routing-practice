import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import Word from './components/Word';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/:textID' element ={<Word/>}/>
        <Route path='/:textID/:color/:secColor' element ={<Word/>}/>
      </Routes>
    </div>
  );
}

export default App;
