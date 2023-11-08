import React, { useState } from "react";
import "../App.css";
import { useGlobalContext } from "../Context";

const Search = () => {
  const { setSearchTerm ,fetchRandom} = useGlobalContext();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
    }
  };
  const handleRandomMeal = () =>{
    setSearchTerm('')
    setText('')
    fetchRandom()
  }
  return (
    <>
      <header className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="type favorite meal"
            className="form-input"
            value={text}
            onChange={handleChange}
          />
          <button className="btn1" type="submit">
            search
          </button>
          <button className="btn btn-hipster" type="btn" onClick={handleRandomMeal} >
            Get One!
          </button>
        </form>
      </header>
    </>
  );
};

export default Search;
