import React, { useState } from "react";
import "./App.css";
import BookList from "./BookList";
import BookForm from "./BookForm";

function App() {
  const [books, setBooks] = useState([]);
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleSave = (book) => {
    if (bookToEdit) {
      // Update existing book
      setBooks(books.map((b) => (b.id === book.id ? book : b)));
    } else {
      // Add new book
      setBooks([...books, book]);
    }
    setBookToEdit(null);
  };

  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="App">
      <h1>Simple React CRUD App</h1>
      <BookForm bookToEdit={bookToEdit} onSave={handleSave} />
      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default App;
