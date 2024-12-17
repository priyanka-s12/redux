import { useSelector, useDispatch } from 'react-redux';
import { fetchExpense, fetchIncome } from '../actions';
import { useEffect } from 'react';

const Savings = () => {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);

  const totalIncome = income.reduce((acc, curr) => curr.amount + acc, 0);
  const totalExpense = expense.reduce((acc, curr) => curr.amount + acc, 0);

  const totalSavings = totalIncome - totalExpense;

  //fetch income from backend on pagload
  //   useEffect(() => {
  //     dispatch(fetchIncome());
  //   }, []);

  //   useEffect(() => {
  //     dispatch(fetchExpense());
  //   }, []);

  useEffect(() => {
    dispatch(fetchIncome());
    dispatch(fetchExpense());
  }, []);

  return (
    <div>
      <h1>Savings Page</h1>
      <h2>Total Savings: $ {totalSavings}</h2>
    </div>
  );
};
export default Savings;
