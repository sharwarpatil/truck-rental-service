import './App.css';
import Navbar from './component/navbar.js'
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
 } from 'react-router-dom';
import Index from './component/index';
import Bookings from './component/Bookings';
import Tracking from './component/tracking';
import Account from './component/account';


function App() {


  // dark mode 
  function Dark(){
   document.body.style.backgroundcolor ="black"

  }

  return (
    <>
      <Router>
        <Navbar/>

        <Routes>
          <Route exact path="/" Component={Index}/>
          <Route path='/Bookings' Component={Bookings} />

          <Route path="/Tracking" Component={Tracking} />
          <Route path="/Account" Component={Account}/>
      
        </Routes>
      </Router>
            
          

            
      
    </>
  );
}

export default App;
