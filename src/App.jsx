import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import ReviewList from './components/ReviewList'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto mt-8 p-4">
          <h2 className="text-2xl font-bold mb-4">Reviews Website Prompt Project</h2>
          <ReviewList />
        </main>
      </div>
    </Router>
  )
}

export default App
