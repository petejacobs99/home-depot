import styles from './WishListItem.module.scss';

export default function WishListItem({ item, handleAddToOrder, handleSelectItem, handleAddToOrder }) {
    return (
        <div className={styles.WishListItem}>
            <div className={styles.name} onClick={() => handleSelectItem(item._id)}>
                {item.name}
            </div>
            <img src={item.img}
                className={styles.img + ' ' + 'flex-ctr-ctr'}
                onClick={() => handleSelectItem(item._id)} />
            
            <div className={styles.buy}>
                <span>${item.price.toFixed(2)}</span>
                <button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
                    add to cart
                </button>
                <button className="btn-sm" onClick={() => handleRemoveFromWishList}>
                    remove from list
                </button>
            </div>
        </div>
    );
}