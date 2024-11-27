import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InventoryForm from './pages/InventoryForm';
import Inventory from './pages/Inventory';
import RemainingItems from './pages/RemainingItems';
import RemovedItems from './pages/RemovedItems';
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
        </div>

        <Routes>
          <Route path="/" element={<InventoryForm />}></Route>
          <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/remainingitems" element={<RemainingItems />}></Route>
          <Route path="/removeditems" element={<RemovedItems />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
