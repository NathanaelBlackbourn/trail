"use client";

import React, { createContext, useState } from "react";

const MenuContext = createContext({
  menuOpen: false,
  setMenuOpen: (menuOpen: boolean) => {},
});

export const useMenuContext = () => React.useContext(MenuContext);

interface Props {
  children: React.ReactNode;
}

export default function MenuProvider({ children }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        menuOpen,
        setMenuOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
