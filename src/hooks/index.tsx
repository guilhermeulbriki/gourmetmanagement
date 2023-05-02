import React from 'react';

import { BagProvider } from './Bag';

interface AppProviderData {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderData> = ({ children }) => (
  <BagProvider>{children}</BagProvider>
);

export default AppProvider;
