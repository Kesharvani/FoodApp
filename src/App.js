import "./styles.css";
import { Routes, Route } from "react-router-dom";

import { Menu } from "./Pages/Menu";
import { Home } from "./Pages/Home";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}
