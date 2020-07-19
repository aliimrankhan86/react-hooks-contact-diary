import React, { useState } from "react";

const Results = props => {
  return (
    <div className="results">
      <h2>Results</h2>
      {props.search.length > 0 ? (
        props.search.map((person, index) => (
          <div key={person.name.first} className="each-contact">
            {person.customedit ? (
              <div className="edit-input">
                <input
                  type="text"
                  placeholder={person.name.first}
                  onChange={e => props.editOnChange(e.target.value)}
                />
                <button onClick={() => props.editName(person, index)}>
                  Ok
                </button>
              </div>
            ) : (
              <div>
                <img src={person.picture.thumbnail} alt={person.name.first} />
                <span>{person.name.first}</span>
                <button onClick={() => props.delete(person)}>Delete</button>
                <button onClick={() => props.edit(person, index)}>Edit</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No Result Found</div>
      )}
    </div>

    // if the value is true in the object then show the input field
    // once the flag is true then show markup of the input else render the map method
  );
};

export default Results;
