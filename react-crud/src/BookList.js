import React from "react";

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Book List</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Description</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.discription}</td>
              <td>{book.author}</td>
              <td>
                <button onClick={() => onEdit(book)}>Edit</button>
                <button onClick={() => onDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
