import React, { createContext, useReducer,useEffect} from "react"; 
import { bookReduser } from "../reduser/bookReduser";

export const BookContext = createContext();

const BookContextProvider = ({children}) => {

  const [books, dispatch] = useReducer(bookReduser,[],() => {
    const localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  });

  useEffect(() => {
    localStorage.setItem('books',JSON.stringify(books));
  }, [books])
 
  return (
    <BookContext.Provider value={{ books, dispatch}}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider