import React, { useState, useEffect } from "react";
import "../styles/FormInput.css";

const FormInput = ({ add }) => {
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => { //mencegah perilaku default dari form submission, memanggil fungsi add yang diterima sebagai prop untuk menambahkan buku baru, menampilkan popup konfirmasi, dan mereset input form.
    e.preventDefault();
    add({ bookName, bookAuthor });
    setShowPopup(true);
    setBookName("");
    setBookAuthor("");
  };

  // Hide the popup after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookAuthor">Book Author</label>
          <textarea
            id="bookAuthor"
            value={bookAuthor}
            onChange={(e) => setBookAuthor(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Book</button>
      </form>
      {showPopup && (
        <div className="popup">
          <p>Book successfully added!</p>
          <button onClick={() => setShowPopup(false)} className="btn btn-success">Close</button>
        </div>
      )}
    </div>
  );
};

export default FormInput;
