import { useMenu } from "../Context/MenuContext";
import { AllFilters } from "../Components/AllFilters";
export const Menu = () => {
  const { menu, cart, setCart, filter } = useMenu();
  const addToCartHandler = (id) => {
    const uniqueObject = menu.find((item) => item.id === id);
    setCart((prev) =>
      prev.includes(uniqueObject) ? [...prev] : [...prev, uniqueObject]
    );
  };
  const filterdata = menu.filter((item) =>
    item.name.includes(filter.searchTerm)
  );
  const radioFilter = [...filterdata].sort((a, b) => a.price - b.price);
  return (
    <div>
      <AllFilters />
      {radioFilter.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.image} alt="name" width="150px" />
            <p>{item.name}</p>
            <p>{item.description}</p>
            <button
              onClick={() => addToCartHandler(item.id)}
              disabled={cart.includes(item)}
            >
              Add to cart
            </button>
          </article>
        );
      })}
    </div>
  );
};
