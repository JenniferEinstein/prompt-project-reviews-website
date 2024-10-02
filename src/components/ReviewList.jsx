
import ReviewItem from './ReviewItem'

function ReviewList() {
  // This is just example data. In a real app, you'd probably fetch this from an API or database
  const reviews = [
    { id: 1, title: "Great Movie", content: "I really enjoyed this film!" },
    { id: 2, title: "Okay Book", content: "It was an average read." }
  ]

  return (
    <div className="review-list">
      {reviews.map(review => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  )
}

export default ReviewList

