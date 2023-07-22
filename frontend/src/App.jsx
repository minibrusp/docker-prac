import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:4000/')
    .then(res => res.json())
    .then(data =>{ 
      setBooks(data)
      setIsLoading(false)
    })
    .catch(err => {
      setError(err)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <h1>Harry Potter Books</h1>

      <div>
        {
          books && (
            books.map(book => (
              <ul key={book.id} style={{
                display: 'flex',
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "1rem",
                textAlign: "left"
              }}>
                <li>
                  {/* <p>{book.id}.</p> */}
                  <p style={{
                    margin: "0",
                  }}>{book.id}. {book.title}</p>
                  <p style={{
                    margin: "0",
                  }}>- {book.author}</p>
                </li>
              </ul>
              
            ))
          )
        }

        {
          isLoading && <span>L O A D I N G .  .  .  .</span>
        }


        {
          error && <span>Failed to fetch data from server please refresh . . . . </span>
        }
      </div>
      

      
    </>
  )
}

export default App
