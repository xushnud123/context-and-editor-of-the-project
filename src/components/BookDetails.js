import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({book}) => {
    const { dispatch } = useContext(BookContext)
    return ( 
        <li>
            <div>
            <div className='title'>{book.title}</div>
            <div className="author">{book.author}</div>
            </div>
            <button 
            type="button" 
            className="btn" 
            onClick={()=> dispatch({type:'REMOVE_BOOK',id:book.id})}
            >
                Delete
            </button>
        </li>
    );
}

export default BookDetails;