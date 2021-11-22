import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');


  const handleAdd = (e) => {
      e.preventDefault();
      if (title !== '' && author !== '')
      {
        dispatch({type: 'ADD_BOOK',book: {
          title, author
        } });
      }
      else if (title === '' && author === '' ){
          toast("please fill out the form");
      }
      else if (title === ''){
          toast("please fill out the title form");
      }
      else if (author === '') {
          toast('please fill out the author form')
      }
      setTitle('')
      setAuthor('')
  };

  return (
    <form onSubmit={handleAdd}>
          <ToastContainer />
      <div className="forma">
        <label htmlFor="title"  className="label">Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="book title"
        />
      </div>
      <div className="forma bir">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="author"
        />
      </div>
          <button className="btnAdd">Add to list</button>
    </form>
  );
};

export default BookForm;
