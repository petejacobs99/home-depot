import styles from './ItemDetail.module.scss';

export default function ItemDetail({ item, handleAddToOrder, handleAddToWishList }) {
    return (
        <div className={styles.ItemDetail}>
            <header>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.heart} onClick={handleAddToWishlist}>&#x2764;</div>
            </header>
            <aside>
                <img src={item.img} className={styles.img + ' ' + 'flex-ctr-ctr'} />
            </aside>
            <main>
                <div className={styles.category}>{item.category}</div>
                <div className={styles.description}>{item.description}</div>
                <div className={styles.buy}>
                    <span>${item.price.toFixed(2)}</span>
                    <button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
                        add to cart
                    </button>
                </div>
            </main>
        </div>
    )
}