import { useEffect, useState } from "react";
import css from "./form.module.css";
import { useSearchParams } from "react-router-dom";

const Form = () => {
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchQuery = searchParams.get("query");
    searchQuery && setValue(searchQuery);
  }, [searchParams]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      query: value,
    });
    // submitForm(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} type="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Form;
