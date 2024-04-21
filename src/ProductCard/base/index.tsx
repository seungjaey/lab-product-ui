import { createContext, PropsWithChildren } from 'react';

const ProductCardBaseContext = createContext(null);

const ProductCardBaseProvider = ({ children }: PropsWithChildren) => {
  return <ProductCardBaseContext.Provider value={null}>{children}</ProductCardBaseContext.Provider>;
};

export { ProductCardBaseProvider };
