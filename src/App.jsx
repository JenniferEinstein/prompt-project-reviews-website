import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import ReviewsSection from './components/ReviewsSection'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <h1>My Reviews</h1>
        <Routes>
          <Route path="/" element={<ReviewsSection />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
