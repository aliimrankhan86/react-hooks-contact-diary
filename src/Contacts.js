import React, { useState } from "react";

const Contacts = props => {
  return (
    <div className="contacts">
      <h2>Contacts</h2>
      {props.contact &&
        props.contact.map((person, index) => {
          return (
            <div key={person.name.first} className="each-contact">
              <img src={person.picture.thumbnail} />
              <span>{person.name.first}</span>
            </div>
          );
        })}
    </div>
  );
};

export default Contacts;
