import styles from './WishList.module.scss';
import WishListItem from '../WishListItem/WishListItem';

// Used to display the details of any order, including the cart (unpaid order)
export default function WishList({ wishlist, handleSelectItem, handleRemoveFromWishList, handleAddToCart, handleSelectItem }) {
    if (!wishlist) return null;

    const listItems = wishlist.lineItems.map(item =>
      <WishListItem
        listItem={item}
        key={item._id}
        handleAddToCart={handleAddToCart}
        handleRemoveFromWishList={handleRemoveFromWishList}
        handleSelectItem={handleSelectItem}
      />
    )

    return (
      <div className={styles.WishList}>
        {listItems.length ?
            <>
              {listItems}
            </>
            :
            <div className={styles.message}>Add some items to your wishlist!</div>
          }
      </div>
    );
  }