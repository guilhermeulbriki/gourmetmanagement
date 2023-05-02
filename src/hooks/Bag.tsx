import React, { useContext, createContext, useState, useCallback } from 'react';

interface BagContextData {
  items: number;
  addNewItem(): void;
  removeItem(): void;
}

interface BagProviderData {
  children: React.ReactNode;
}

const BagContext = createContext({} as BagContextData);

export const BagProvider: React.FC<BagProviderData> = ({ children }) => {
  const [items, setItems] = useState(0);

  const addNewItem = useCallback(() => {
    setItems(items + 1);
  }, [items]);

  const removeItem = useCallback(() => {
    if (items > 0) {
      setItems(items - 1);
    }
  }, [items]);

  return (
    <BagContext.Provider value={{ addNewItem, removeItem, items }}>
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
