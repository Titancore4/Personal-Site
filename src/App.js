import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navbar from './routes/navbar/navbar.component';
import { Fragment } from 'react';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  );
}

export default App;
