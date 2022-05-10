import React, { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])


  const fetchBooks = async () => {

    const resp = await fetch("http://www.testdomain.com/v1/api/books");
    const respJSON = await resp.json();
    console.log(respJSON)

    setBooks(respJSON)
    setLoading(false)
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
      {loading ? "Betöltődés alatt" : 
      books.map( book => <div>{book.title}{book.author}{book.year}</div>) }
    </div>
  );
}

export default App;
