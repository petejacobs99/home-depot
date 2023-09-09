import React from "react";
import ItemList from "../../components/ItemList/ItemList"; 
import styles from "./SearchResults.module.scss";

const SearchResultsPage = ({ handleAddToOrder, setItemListItems, itemListItems }) => {
  return (
    <div>
      {NavBar}
    <div className={styles.searchResultsContainer}>
      <h1>SEARCH RESULTS</h1>
    </div>
      <ItemList
        handleAddToOrder={handleAddToOrder}
        setItemListItems={setItemListItems}
        itemListItems={itemListItems}
      />
    </div>
  );
};

export default SearchResultsPage;
