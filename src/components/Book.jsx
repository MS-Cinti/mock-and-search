import React from 'react'

function Book({title, author, year}) {

  return (
    <div>
      <h2>${title}</h2>
      <button>Show details</button>
    </div>
  )
}

export default Book