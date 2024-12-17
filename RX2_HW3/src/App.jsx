//add routing
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryAdminForm from './pages/InventoryAdminForm';
import Inventory from './pages/Inventory';
import RemovedItems from './pages/RemovedItems';
import RemainingItems from './pages/RemainingItems';

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/inventory">Inventory</Link>
              </li>
              <li>
                <Link to="/removeditems">Removed Items</Link>
              </li>
              <li>
                <Link to="/remainingitems">Remaining Items</Link>
              </li>
              <li>
                <Link to="/">Add New Items</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<InventoryAdminForm />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/removeditems" element={<RemovedItems />} />
            <Route path="/remainingitems" element={<RemainingItems />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
