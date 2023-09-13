import React, { useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import SearchBar from "../../components/SearchBar/SearchBar"; // Import the SearchBar component
import styles from "./SearchResultsPage.module.scss";
import {searchItems} from "../../utilities/items-api";
import { useParams } from 'react-router-dom';

export default function SearchResultsPage ({ handleAddToOrder, setItemListItems, itemListItems, updateSearchResults }) {
  const [searchResults, setSearchResults] = useState([]); // State to store search results

  // Function to update search results
  /* const updateSearchResults = async (searchQuery) => {
    const items = await searchItems(searchQuery);
    setSearchResults(items);
  }; */

  const params = useParams();

  async function getSearchResults(searchQuery) {
    const items = await searchItems(searchQuery);
    setSearchResults(items);
  }
  getSearchResults(params.term);

  return (
    <div>
      <div className={styles.searchResultsContainer}>
        <h1>SEARCH RESULTS FOR "{params.term}"</h1>
        {/* Render the SearchBar component and pass the updateSearchResults function */}
        {/* <SearchBar onSearch={updateSearchResults} />*/}
      </div>
      {/*<ItemList
        // Pass the searchResults state as the items to be displayed
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        handleAddToOrder={handleAddToOrder}
        setItemListItems={setItemListItems}
        itemListItems={itemListItems}
      /> */}
      {searchResults}
    </div>
  );
};