import styles from "./ItemList.module.scss";
import ItemListItem from "../ItemListItem/ItemListItem";

export default function ItemList({
  handleAddToOrder,
  setItemListItems,
  itemListItems
}) {
  const items = itemListItems.map(item =>
    <ItemListItem
      key={item._id}
      onClick={handleAddToOrder}
      itemListItem={item}
      setItemListItems={setItemListItems}
      itemListItems={itemListItems}
    />
  );

  return (
    <div className={styles.itemList}>
      {items}
    </div>
  );
}