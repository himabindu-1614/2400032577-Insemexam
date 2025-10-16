import React, { useState, useEffect } from 'react'
import './App.css'
import Welcome from './Welcome'

function App() {
  
  const [loginName, setLoginName] = useState('')
  const [currentUser, setCurrentUser] = useState('')

  
  useEffect(() => {
    try {
      const saved = localStorage.getItem('currentUser')
      if (saved) setCurrentUser(saved)
    } catch (err) {
      
    }
  }, [])


  useEffect(() => {
    try {
      if (currentUser) localStorage.setItem('currentUser', currentUser)
      else localStorage.removeItem('currentUser')
    } catch (err) {
      
    }
  }, [currentUser])

  function handleLogin(e) {
    e.preventDefault()
    setCurrentUser(loginName)
    setLoginName('')
  }

  return (
    <div className="App">
      <h1>Student Dashboard</h1>

      <form className="login" onSubmit={handleLogin}>
        <input
          autoFocus
          type="text"
          placeholder="Enter your name"
          value={loginName}
          onChange={(e) => setLoginName(e.target.value)}
        />
        <button type="submit" disabled={!loginName.trim()}>{loginName.trim() ? 'Login' : 'Enter name'}</button>
      </form>

      {currentUser ? (
        <div className="welcome-area">
          <Welcome name={currentUser} />
          <div style={{ marginTop: '1rem' }}>
            <button onClick={() => setCurrentUser('')}>Logout</button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
