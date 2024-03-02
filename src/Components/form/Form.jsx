import { useState } from "react";

const Form = ({ submitForm }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitForm(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} />
      </form>
    </div>
  );
};

export default Form;
