//redux thunk middleware - help to solve async operations - dispatch function instead of action object
//normally actions are synchronous - run one by one - click btn then action dispatch immediately
//in real, fetching data from server, saving data to db - async operation - depend on server - it may take time to happen
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import IncomeExpenseForm from './pages/IncomeExpenseForm';
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
                <Link to="/expenses">Expense</Link>
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
            <Route path="/expenses" element={<Expense />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/" element={<IncomeExpenseForm />} />
          </Routes>
        </div>
      </Router>
    </main>
  );
}

export default App;
