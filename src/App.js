import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Saladsoup from './components/Saladsoup'
import Barnyard from './components/Barnyard'
import Henhouse from './components/Henhouse'
import Freshsea from './components/Freshsea';
// import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
     <Router> 
     {/* <Header/> */}
     
      <Routes>
        <Route/>
        <Route path='/' element={<Saladsoup/>}/>
        <Route path='/barnyard' element={<Barnyard/>}/>
        <Route path='/henhouse' element={<Henhouse/>}/>
        <Route path='/freshsea' element={<Freshsea/>}/>
        
        </Routes>
      
      
      </Router>

      
    </div>
  );
}

export default App;



// {
//     <h1>{item && item.dish_id}</h1>
//                     <h1>{item && item.dish_name}</h1>
//                     <img src={item.dish_image}  />
//                     <h1>{item && item.dish_price}</h1> <br /><br />
// }
