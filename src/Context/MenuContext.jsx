import { useContext, createContext } from "react";
import { useState, useEffect } from "react";

import { fakeFetch } from "../Database/api";
export const MenuContextRoot = createContext();
export const MenuContext = ({ children }) => {
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState({
    searchTerm: "",
    checkBoxArray: [],
    radioButton: ""
  });
  const getMenuItem = async () => {
    try {
      const {
        status,
        data: { menu }
      } = await fakeFetch("https://example.com/api/menu");
      if (status === 200) {
        setMenu(menu);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getMenuItem();
  }, []);
  return (
    <div>
      <MenuContextRoot.Provider
        value={{ menu, setMenu, cart, setCart, filter, setFilter }}
      >
        {children}
      </MenuContextRoot.Provider>
    </div>
  );
};
export const useMenu = () => useContext(MenuContextRoot);
