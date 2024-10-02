import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ReviewsSection from './components/ReviewsSection'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow p-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">My Reviews</h1>
          <h2 className="text-xl text-center text-gray-600 mt-2">Reviews Website Prompt Project</h2>
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
