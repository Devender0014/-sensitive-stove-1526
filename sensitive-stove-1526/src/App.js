// import logo from './logo.svg';
// import './App.css';
import Footer from './Pages/Footer';
import Homepage1 from './Pages/Homepage1';
import Login from './Pages/LoginPage';
import Navbar from './Pages/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>

          <Route path='/' element={<Homepage1 />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
