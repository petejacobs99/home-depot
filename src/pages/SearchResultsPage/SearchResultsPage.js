import React, { useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import SearchBar from "../../components/SearchBar/SearchBar"; // Import the SearchBar component
import styles from "./SearchResultsPage.module.scss";

export default function SearchResultsPage ({ handleAddToOrder, setItemListItems, itemListItems }) {
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  // Function to update search results
  const updateSearchResults = async (searchQuery) => {
    const items = await searchItems(searchQuery);
    setSearchResults(items);
  };

  return (
    <div>
      <div className={styles.searchResultsContainer}>
        <h1>SEARCH RESULTS</h1>
        {/* Render the SearchBar component and pass the updateSearchResults function */}
        <SearchBar onSearch={updateSearchResults} />
      </div>
      <ItemList
        // Pass the searchResults state as the items to be displayed
        items={searchResults}
        handleAddToOrder={handleAddToOrder}
        setItemListItems={setItemListItems}
        itemListItems={itemListItems}
      />
    </div>
  );
};


