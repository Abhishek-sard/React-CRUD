import React, { useState, useEffect } from "react";

const BookForm = ({ bookToEdit, onSave }) => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (bookToEdit) {
      setId(bookToEdit.id);
      setTitle(bookToEdit.title);
      setAuthor(bookToEdit.author);
    } else {
      setId("");
      setTitle("");
      setAuthor("");
    }
  }, [bookToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: id || Date.now(), title, author };
    onSave(book);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID</label>
        {/* Remove readOnly and disabled attributes */}
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)} 
        />
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
