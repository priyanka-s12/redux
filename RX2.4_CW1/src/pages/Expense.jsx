import { useSelector, useDispatch } from 'react-redux';
import { fetchExpense } from '../actions';
import { useEffect } from 'react';
const Expense = () => {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  console.log(expenses);

  const totalExpense = expenses.reduce((acc, curr) => curr.amount + acc, 0);

  //fetch income from backend on pagload
  useEffect(() => {
    dispatch(fetchExpense());
  }, []);
  return (
    <div>
      <h1>Expense Page</h1>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.description} : ${expense.amount}
          </li>
        ))}
      </ul>
      <h2>Total Expenses: $ {totalExpense}</h2>
    </div>
  );
};
export default Expense;
