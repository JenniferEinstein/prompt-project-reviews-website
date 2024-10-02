import React from 'react'
import ReviewList from './ReviewList'
import ReviewSubmissionForm from './ReviewSubmissionForm'

function ReviewsSection() {
  return (
    <section className="mt-8">
      <ReviewList />
      <ReviewSubmissionForm />
    </section>
  )
}

export default ReviewsSection
