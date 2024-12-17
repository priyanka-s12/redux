import InventoryExpenseForm from './pages/InventoryExpenseForm';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Income from './pages/Income';
import Expense from './pages/Expense';
import Savings from './pages/Savings';

function App() {
  return (
    <main>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/income">Income</Link>
              </li>
              <li>
                <Link to="/expense">Expense</Link>
              </li>
              <li>
                <Link to="/savings">Savings</Link>
              </li>
              <li>
                <Link to="/">New Entries</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/income" element={<Income />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="savings" element={<Savings />} />
            <Route path="/" element={<InventoryExpenseForm />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
