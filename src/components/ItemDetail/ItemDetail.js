import styles from './ItemDetail.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ItemDetail({
	params,
	item,
	handleAddToOrder,
	handleAddToWishList
}) {
	const [filledHeart, setFilledHeart] = useState(false);

	const handleHeartHover = () => {
		setFilledHeart(!filledHeart);
	};

	return (
		<div className={styles.ItemDetail}>
			<header>
				<div className={styles.name}>
					{item.name}
					<span
						className={styles.heart}
						onMouseEnter={handleHeartHover}
						onMouseLeave={handleHeartHover}
						onClick={() => handleAddToWishList(item._id)}
					>
						{!filledHeart ? '♡' : '♥' }
					</span>
				</div>
			</header>
			<aside>
				<img src={item.img} className={styles.img} />
				{/* <div>
					<Link
						to={`/home/${params.depName}/${params.catName}/items`}
					>
						BACK
					</Link>
				</div> */}
			</aside>
			<main>
				<div className={styles.category}>{params.catName}</div>
				<div className={styles.details}>{item.details}</div>
				<div className={styles.buy}>
					<span>${item.price}</span>
					<button className="btn-sm" onClick={() => handleAddToOrder(item._id)}>
						ADD TO CART
					</button>
				</div>
			</main>
		</div>
	);
}
