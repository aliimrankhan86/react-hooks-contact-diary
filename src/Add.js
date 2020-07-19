import React, { useState } from "react";

const Add = props => {
  return (
    <div className="add">
      <h2>Add</h2>
      <input
        type="text"
        // placeholder="firstname"
        id="add-input"
        onChange={props.add}
        value={props.value}
      />
      <button onClick={props.addtolist}>Add Contact</button>
    </div>
  );
};

export default Add;
