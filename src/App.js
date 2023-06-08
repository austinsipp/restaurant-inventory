import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AuditInventory from './components/AuditInventory'
import ReceiveShipment from './components/ReceiveShipment'
import UseInventory from './components/UseInventory'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to Super Restaurant Inventory, What would you like to do?</h1>
        <Router>
          <nav className='navBar'>
            <ul>
              <li>
                <Link to='/receive'>Receive New Inventory</Link>
              </li>
              <li>
                <Link to='/use'>Use Inventory</Link>
              </li>
              <li>
                <Link to='/audit'>Audit Inventory</Link>
              </li>
            </ul>
          </nav>
          <div className='display'>
            <Routes>
              <Route path='/receive' element={<ReceiveShipment />} />
              <Route path='/use' element={<UseInventory />} />
              <Route path='/audit' element={<AuditInventory />} />
            </Routes>
          </div>
        </Router>
        <div className='logoImage'>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>


    </div>
  );
}

export default App;
