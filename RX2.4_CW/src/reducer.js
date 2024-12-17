const initialState = {
  income: [],
  expense: [],
  savings: [],
};

const financeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INCOME_SUCCESS':
      return { ...state, income: action.payload };
    case 'FETCH_EXPENSE_SUCCESS':
      return { ...state, expense: action.payload };
    case 'ADD_ENTRY_SUCCESS':
      if (action.payload.entryType === 'income') {
        return { ...state, income: [...state.income, action.payload] };
      } else {
        return { ...state, expense: [...state.expense, action.payload] };
      }

    default:
      return state;
  }
};

export default financeReducer;
