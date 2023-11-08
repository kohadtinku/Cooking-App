import React from "react";
import Favorities from "./components/Favorities";
import Meals from "./components/Meals";
import Search from "./components/Search";
import Modal from "./components/Modal";
import { useGlobalContext } from "./Context";

import "./App.css";
import Footer from "./components/Footer";
const App = () => {
  const { showModal, favorites,fetchMeals,allMeal } = useGlobalContext();
  return (
    <main>
      <h1 className="strong" onClick={()=>fetchMeals(allMeal)}>Cooking Hub</h1>
      <Search />
      {favorites.length > 0 && <Favorities />}
      <Meals />
      {showModal && <Modal />}
      <Footer/>
    </main>
  );
};

export default App;
