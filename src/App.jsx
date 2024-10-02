import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ReviewsSection from './components/ReviewsSection'

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main>
          <h1>My Reviews</h1>
          <h2>Reviews Website Prompt Project</h2>
          <Routes>
            <Route path="/" element={<ReviewsSection />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
