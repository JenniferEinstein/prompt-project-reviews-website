import React, { useState } from 'react'

function ReviewSubmissionForm() {
  const [title, setTitle] = useState('')
  const [reviewerName, setReviewerName] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the submission,
    // such as sending the data to an API or updating state
    console.log('Submitted:', { title, reviewerName, content })
    // Clear the form after submission
    setTitle('')
    setReviewerName('')
    setContent('')
  }

  return (
    <div className="review-submission-form">
      <h3>Submit a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="reviewerName">Your Name:</label>
          <input
            type="text"
            id="reviewerName"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Review:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}

export default ReviewSubmissionForm
