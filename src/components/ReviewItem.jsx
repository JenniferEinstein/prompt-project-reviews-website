import React from 'react'

function ReviewItem({ review }) {
  return (
    <div className="review-item">
      <h3>{review.title}</h3>
      <p>{review.content}</p>
    </div>
  )
}

export default ReviewItem
