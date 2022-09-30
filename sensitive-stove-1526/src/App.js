// import logo from './logo.svg';
// import './App.css';
import Footer from './Pages/Footer';
import Homepage1 from './Pages/Homepage1';
import Login from './Pages/LoginPage';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Login/> */}
        <Homepage1/>
        <Footer/>
    </div>
  );
}

export default App;
