import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <p>Welcome to home page</p>
      <NavLink to="/menu">Menu</NavLink>
    </div>
  );
};
