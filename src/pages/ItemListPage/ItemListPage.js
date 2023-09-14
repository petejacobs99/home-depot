import "../../scss/styles.scss";
import styles from "./ItemListPage.module.scss"
import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import * as itemsAPI from "../../utilities/items-api";
import ItemList from "../../components/ItemList/ItemList";

export default function ItemListPage({ handleAddToOrder, setWishlist }) {
  const [itemListItems, setItemListItems] = useState([]);
  const [activeCat, setActiveCat] = useState('');
  const categoriesRef = useRef([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      categoriesRef.current = items.items.reduce((cats, item) => {
        const cat = item.category.name;
        return cats.includes(cat) ? cats : [...cats, cat];
      }, []);
      /* const items = await itemsAPI.getByCategory(params.catName); */
      setItemListItems(items.items);
      /* setActiveCat(categoriesRef.current[0]); */
      const actCatName = categoriesRef.current.find((cat) => cat === params.catName);
      setActiveCat(actCatName);
    }
    getItems();
  }, []);

 /*  async function handleClick(i) {
    navigate(`/home/categories/items/${itemListItems[i]._id}`);
  } */

  return (
    <div className={styles.App}>
      <div className={styles.itemList}>
        <ItemList 
          itemListItems={itemListItems.filter(item => item.category.name === activeCat)}
          setItemListItems={setItemListItems} 
          onClick={handleAddToOrder}
          setWishlist={setWishlist}
        />
      </div>
    </div>
  );
}