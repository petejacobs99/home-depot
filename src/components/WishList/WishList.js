import styles from './WishList.module.scss';
import WishListItem from '../WishListItem/WishListItem';

export default function WishList({ wishlist, handleSelectItem, handleRemoveFromWishList, handleAddToCart }) {
  console.log(wishlist)
    const listItems = wishlist.items.map(item =>
      <WishListItem
        item={item}
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