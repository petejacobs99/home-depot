import DynamicStars from './DynamicStars';
import styles from './Review.module.scss';

const Review = ({ review }) => {
  return (
    <div className={styles.review}>
      <h3>{review.reviewerName}</h3>
      <p>{review.reviewText}</p>
      <DynamicStars rating={review.rating} />
    </div>
  );
};

export default Review;
