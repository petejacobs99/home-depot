import { useState, useEffect } from 'react'
import styles from './WishListPage.module.scss'
import WishList from '../../components/WishList/WishList'

export default function WishlistPage({ wishlist, handleSelectItem, handleRemoveFromWishList, handleAddToOrder }) {
    return (
        <div className={styles.WishListPage}>
            <WishList
                wishlist={wishlist}
                handleSelectItem={handleSelectItem}
                handleAddToOrder={handleAddToOrder}
                handleRemoveFromWishList={handleRemoveFromWishList}
            />
        </div>
    )
}