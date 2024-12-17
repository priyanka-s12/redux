export const ADD_BOOK = 'book/added';
export const REMOVE_BOOK = 'book/removed';

export const addBook = (book) => ({ type: ADD_BOOK, payload: book });

export const removeBook = (isbn) => ({ type: REMOVE_BOOK, payload: isbn });
