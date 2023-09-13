import styles from "./SearchResults.module.scss";
import SearchResultsItem from "../SearchResultsItem/SearchResultsItem";

export default function SearchResults({
  handleAddToOrder,
  setSearchResultsItems,
  searchResultsItems
}) {
  const items = searchResultsItems.map(item =>
    <SearchResultsItem
      className={styles.item}
      key={item._id}
      handleAddToOrder={handleAddToOrder}
      searchResultsItem={item}
      setSearchResultsItems={setSearchResultsItems}
      searchResultsItems={searchResultsItems}
    />
  );

  return (
    <div className={styles.searchResults}>
      {items}
    </div>
  );
}