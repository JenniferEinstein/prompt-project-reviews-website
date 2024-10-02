import React from 'react'
import ReviewList from './ReviewList'
import ReviewSubmissionForm from './ReviewSubmissionForm'

function ReviewsSection() {
  return (
    <section className="reviews-section">
      <ReviewList />
      <ReviewSubmissionForm />
    </section>
  )
}

export default ReviewsSection
