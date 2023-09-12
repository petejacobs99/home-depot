import styles from './Review.module.scss';
import StaticStars from '../StaticStars/StaticStars'
import ReviewForm from '../ReviewForm/ReviewForm'

export default function Reviews({ review, removeReview, user, addReview}) {
  const [edit, setEdit] = useState(false)
  const showForm = () => (
    <ReviewForm 
      item={review.item}
      user={user}
      addReview={addReview}/>
  )
  const showButtons = () => (
    <>
    <button onClick={() => removeReview(review.item)}>delete review</button>
    <button onClick={() => setEdit(true)}>edit review</button>
    </>
  )
  const showReview = () => (
    <div className={styles.Review}>
      <span className={styles.name}>{review.user.name}: </span>
      <StaticStars rating={review.rating} />
      <div className={styles.body}>{review.body}</div>
      {user._id === review.user._id ? showButtons() : ''}
    </div>
  )
  return (
    edit ? showForm : showReview
  )
}

