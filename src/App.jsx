import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import CounterMain from './components/CounterMain'

function App() {
  return (
    <Router>
      <div style={{ 
        position: 'relative', 
        minHeight: '100vh',
        width: '100%',
        maxWidth: '100vw'
      }}>
        <Routes>
          <Route path="/" element={<CounterMain />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
