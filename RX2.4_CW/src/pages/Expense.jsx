import { useSelector, useDispatch } from 'react-redux';
import { fetchExpense } from '../actions';
import { useEffect } from 'react';

const Expense = () => {
  const expense = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const totalExpense = expense.reduce((acc, curr) => curr.amount + acc, 0);

  useEffect(() => {
    dispatch(fetchExpense());
  }, []);
  return (
    <div>
      <h1>Expense Page</h1>
      <ul>
        {expense.map((expense, index) => (
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
