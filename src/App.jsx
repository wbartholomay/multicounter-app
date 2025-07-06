import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CounterMain from './components/CounterMain'
import Settings from './components/Settings'

function App() {
  return (
    <Router>
      <div style={{ 
        position: 'relative', 
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100vw'
      }}>
        <Link 
          to="/settings" 
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            textDecoration: 'none',
            padding: '8px 16px',
            backgroundColor: '#1a1a1a',
            color: '#fff',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        >
          ⚙️ Settings
        </Link>

        <Routes>
          <Route path="/" element={<CounterMain />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
