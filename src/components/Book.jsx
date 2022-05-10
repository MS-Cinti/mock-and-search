import React, { useState } from 'react';
import Button from '@mui/material/Button';

function Book({title, author, year}) {

  const [details, setDetails] = useState(false)


  return (
    <div>
      <h2>{title}</h2>
      {details ?
      <>
        <h3>{author}</h3>
        <h4>{year}</h4>
      </> : null
      }
      <Button variant="outlined" onClick={ () => {setDetails(!details)} }>{!details ? "Show" : "Hide"} </Button>
    </div>
  )
}

export default Book