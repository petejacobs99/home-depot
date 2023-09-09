import styles from './ItemDetail.module.scss';

export default function ItemDetail({ item, handleAddToOrder, setActiveItem }) {
    return (
    <div className={styles.ItemDetail}>
        <button className="back-btn" onClick={() => setActiveItem({})}>← BACK</button>
      <img src={item.img} className={styles.img + ' ' + 'flex-ctr-ctr'} />
      <aside>
      <div className={styles.name}>{item.name}</div>
        <div className={styles.category}>{item.category}</div>
      </aside>
      <footer className={styles.description}>{item.description}</footer>
      <div className={styles.buy}>
        <span>${item.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
          add to cart
        </button>
      </div>
    </div>
  )
}