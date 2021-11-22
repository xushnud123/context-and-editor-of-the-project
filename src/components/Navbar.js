import React, {useContext} from 'react';
import { BookContext }  from '../context/BookContext';


const Navbar = () => {
    
    const { books } = useContext(BookContext)

    return (
        <>
        <h1>Xushnudbek Reading List</h1>
        <p>Currently you have {books.length} books to get through...</p>
        </>
    );
}
 
 export default Navbar