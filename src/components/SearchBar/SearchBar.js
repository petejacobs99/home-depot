import styles from './SearchBar.module.scss';
import { searchItems } from '../../utilities/items-api';

export default function SearchBar({ onSearch }) {
	const handleEnterKey = async (e) => {
        e.preventDefault()
		if (e.key === 'Enter') {
			const items = await searchItems(e.target.value)
            onSearch(items)
		}
	};

	return (
		<div className={styles.SearchBar}>
			<input
				type="text"
				placeholder="SEARCH..."
				onEnterKey={handleEnterKey}
			/>
		</div>
	);
}
