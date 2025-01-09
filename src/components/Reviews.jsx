const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    return ( 
        <div className="reviews">
            <h2>Reviews</h2>
            <div className="reviews__list">
                {reviews.map((review, index) => (
                    <div key={index} className="reviews__item">
                        <p>{review.text}</p>
                        <p>Rating: {review.rating}/5</p>
                        </div>
                        ))}
            </div>
        </div>
     );
}
 
export default Reviews;