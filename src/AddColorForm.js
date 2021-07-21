import React, { useState } from "react";
// import '../../stylesheets/AddColorForm.scss'

const AddColorForm = () => {
  const [{ title, color }, setColor] = useState({
    title: "",
    color: "#000000",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewColor(title, color);
    setColor({ title: "", color: "#000000" });
  };

  return (
    <form className="add-color" onSubmit={handleSubmit}>
      <input
        ref={(input) => ({ title: input })}
        type="text"
        placeholder="color title..."
        required
      />
      <input ref={(input) => ({ color: input })} type="color" required />
      <button> ADD </button>
    </form>
  );
};

export default AddColorForm;
