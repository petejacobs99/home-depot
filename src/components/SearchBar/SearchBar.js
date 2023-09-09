import styles from './SearchBar.module.scss';
import { searchItems } from '../../utilities/items-api';
import { useState } from 'react';

export default function SearchBar() {
	const [inputText, setInputText] = useState('')

	const handleEnterKey = async (e) => {
		if (e.key === 'Enter') {
			const items = await searchItems(e.target.value)
			console.log(items)
		}
	};

	return (
		<div className={styles.SearchBar}>
			<input
				type="text"
				placeholder="SEARCH..."
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				onKeyDown={handleEnterKey}
			/>
		</div>
	);
}
