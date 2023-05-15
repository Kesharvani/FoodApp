import { useMenu } from "../Context/MenuContext";
export const AllFilters = () => {
  const { filter, setFilter } = useMenu();
  const searchHandler = (event) => {
    setFilter((prev) => ({ ...prev, searchTerm: event.target.value }));
  };
  const radioButtonHandler = (event) => {
    setFilter((prev) => ({ ...prev, radioButton: event.target.value }));
  };
  const checkBoxHandler = (event) => {
    setFilter((prev) =>
      filter.checkBoxArray.includes(event.target.value)
        ? {
            ...prev,
            checkBoxArray: prev.checkBoxArray.filter(
              (item) => item !== event.target.value
            )
          }
        : {
            ...prev,
            checkBoxArray: [...prev.checkBoxArray, event.target.value]
          }
    );
  };
  console.log(filter.checkBoxArray);
  return (
    <div>
      <h1>Filters:</h1>
      <label htmlFor="">
        filter:
        <input type="text" onChange={searchHandler} />
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          value="is_vegetarian"
          onChange={checkBoxHandler}
        />
        Veg
      </label>
      <label htmlFor="">
        <input type="checkbox" value="is_spicy" onChange={checkBoxHandler} />
        spicy
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="low-to-high"
          name="price"
          onChange={radioButtonHandler}
        />
        Low to high
      </label>
      <label htmlFor="">
        <input
          type="radio"
          value="high-to-low"
          name="price"
          onChange={radioButtonHandler}
        />
        High to low
      </label>
    </div>
  );
};
