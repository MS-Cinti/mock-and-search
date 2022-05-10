import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Book from "./components/Book";

function App() {

  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([]);

  async function fetchBooks() {

    const response = await fetch("http://www.testdomain.com/v1/api/books");
    const responseJSON = await response.json();
  
    console.log(responseJSON);

    setBooks(responseJSON);
    setLoading(false);

  }
  
  useEffect( 
    () => {
      setLoading(true)
      fetchBooks()
    }, 
    []
  )

  return (
    <div className="App">
      {loading ? <LoadingMask /> : 
      books.map( (book) => (<Book book={book}/> ))}
    </div>
  );
}

export default App;
