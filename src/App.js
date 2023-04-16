import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Saladsoup from './components/Saladsoup'
import Barnyard from './components/Barnyard'
import Henhouse from './components/Henhouse'
import Freshsea from './components/Freshsea';

function App() {
  return (
    <div className="App">
     <Router> 
     <Header/>

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
