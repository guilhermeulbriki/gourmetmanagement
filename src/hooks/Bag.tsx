import React, { useContext, createContext, useState } from 'react';

import { formatter } from '../utils/formatPrice';

interface Items {
  id: number;
  quantity: number;
  price: number;
}

interface BagContextData {
  addNewItem(id: number, price: number): void;
  removeItem(id: number): void;
  getItemQuantity: (id: number) => number;
  bagQuantity: number;
  bagItems: Items[];
  getTotalPrice: () => string;
}

interface BagProviderData {
  children: React.ReactNode;
}

const BagContext = createContext({} as BagContextData);

export const BagProvider: React.FC<BagProviderData> = ({ children }) => {
  const [items, setItems] = useState<Items[]>([]);

  const bagQuantity = items.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getItemQuantity = (id: number) => {
    return items.find((item) => item.id === id)?.quantity || 0;
  };

  const addNewItem = (id: number, price: number) => {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === id) == null) {
        return [...currentItems, { id, quantity: 1, price }];
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });

    console.log(items);
  };

  const removeItem = (id: number) => {
    setItems((currentItems) => {
      if (currentItems.find((item) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getTotalPrice = () => {
    return formatter.format(
      items.reduce((total, cartItem) => {
        const item = items.find((i) => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
      }, 0)
    );
  };

  return (
    <BagContext.Provider
      value={{
        getItemQuantity,
        addNewItem,
        removeItem,
        bagItems: items,
        bagQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

export function useBag() {
  const context = useContext(BagContext);

  if (!context) {
    throw new Error('useBag must be used within an BagProvider');
  }

  return context;
}
