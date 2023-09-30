import './App.css';
import Navbar from './component/navbar.js'
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Link
 } from 'react-router-dom';
import Index from './component';
import Bookings from './component/Bookings';


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


      
        </Routes>
      </Router>
            
          

            
      
    </>
  );
}

export default App;
