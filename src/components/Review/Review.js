import DynamicStars from './DynamicStars';
import styles from './Review.module.scss';

const Review = ({ review, userReview }) => {
  return (
    <div className={styles.review}>
      <h3>{review.reviewerName}</h3>
      <p>{review.reviewText}</p>
      <DynamicStars rating={review.rating} />

    
      {userReview && (
        <div className={styles.userReview}>
          <h4>Your Review:</h4>
          <p>{userReview.reviewText}</p>
          <DynamicStars rating={userReview.rating} />
        </div>
      )}
    </div>
  );
};

export default Review;

