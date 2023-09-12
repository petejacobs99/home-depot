import styles from './WishList.module.scss';
import WishListItem from '../WishListItem/WishListItem';

export default function WishList({ wishlist, handleSelectItem, handleRemoveFromWishList, handleAddToCart }) {
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