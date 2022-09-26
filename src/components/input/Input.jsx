import React from "react";
import styles from "./input.module.css";
import { useState } from "react";
import Output from "../output/Output";
import axios from "axios";

const Input = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(query);

    const { data } = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
    );
    setData(data);

    console.log(data);
    setQuery("");
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={query}
          onChange={onChange}
          placeholder="Search a word..."
          type="text"
        />
      </form>
      <Output data={data}></Output>
    </div>
  );
};

export default Input;
