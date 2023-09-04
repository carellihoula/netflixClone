import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/nav/NavBar';
import MyList from './pages/MaListe/MyList';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/list" element={<MyList />}/>
      </Routes>
    </div>
  );
};

export default App;

