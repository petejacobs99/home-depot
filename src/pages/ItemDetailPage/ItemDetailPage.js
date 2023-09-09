import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api'
import * as reviewAPI from '../../utilities/reviews-api'
import styles from './ItemDetailPage.module.scss'
import {useParams, Link } from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import ReviewForm from '../../components/ReviewForm/ReviewForm'
import ReviewList from '../../components/ReviewList/ReviewList'

export default function ItemDetailPage({ user, handleAddToOrder, handleAddToWishList }) {
    const [item, setItem] = useState({})
    const [reviews, setReviews] = useState({})
    const params = useParams()
    useEffect(function () {
        async function getItem() {
            const data = await itemsAPI.getById(params.id)
            setItem(data)
            getReviews(params.id)
        }
        getItem()
    }, [])
    async function getReviews() {
        const data = await reviewAPI.getReviews(itemId)
        setReviews(data)
    }
    async function addReview(content) {
        await reviewAPI.addReview(itemId, content)
        getReviews()
    }
    async function removeReview() {
        await reviewAPI.deleteReview(itemId)
        getReviews()
    }

    return (
        <main className={styles.NewOrderPage}>
            <main>
                <Link to={`/home/${params.depName}/${params.catName}/items`} className="button btn-sm">back</Link>
                <ItemDetail
                    item={item}
                    handleAddToOrder={handleAddToOrder}
                    handleAddToWishList={handleAddToWishList} />
            </main>
            <footer>
                <ReviewForm
                    itemId={item._id}
                    addReview={addReview}
                    user={user} />
                <ReviewList
                    reviewData={reviews}
                    removeReview={removeReview}
                    addReview={addReview}
                    user={user} />
            </footer>
        </main>
    )
}