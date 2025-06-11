import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import Settings from './components/Settings'

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
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
          <Route path="/" element={<Counter />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
