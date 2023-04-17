import Home from './routes/home/home.component';
import Navbar from "./routes/navbar/navbar.component"
import { Fragment } from 'react';
import './App.scss';

function App() {
  return (
      <Fragment>
        <Navbar />
        <Home />
      </Fragment>
  );
}

export default App;
