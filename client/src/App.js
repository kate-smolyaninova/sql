import './common.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar/NavBar'
import { Context } from './index'
import { useContext, useEffect, useState } from 'react'
import { check } from './http/userAPI'
import Spinner from 'react-bootstrap/Spinner'

function App() {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      check()
        .then((data) => {
          user.setUser(data)
          user.setIsAuth(true)
        })
        .finally(() => setLoading(false))
    }, 3000)
  }, [])

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
    </div>
  )
}

export default App
