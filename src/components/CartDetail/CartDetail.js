import React from 'react';
import LineItem from './LineItem';

export default function LineItemList({ lineItems, isPaid, handleChangeQty }) {
  return (
    <div>
      {lineItems.map((lineItem) => (
        <LineItem
          key={lineItem.item._id} 
          lineItem={lineItem}
          isPaid={isPaid}
          handleChangeQty={handleChangeQty}
        />
      ))}
    </div>
  );
}