import ReviewList from '../components/ReviewList'

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center text-gray-800">My Reviews</h1>
      <h2 className="text-xl text-center text-gray-600 mt-2">Reviews Website Prompt Project</h2>
      <ReviewList />
    </div>
  )
}

export default HomePage
