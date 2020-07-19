import React, { useState, useEffect } from "react";
import "./styles.css";
import People from "./People.json";
import Contacts from "./Contacts";
import Results from "./Results";
import Add from "./Add";

const Diary = () => {
  const [data, setdata] = useState(People.results);
  const [search, setsearch] = useState("");
  const [contact, setcontact] = useState("");
  const [editperson, seteditperson] = useState("");

  const searchMe = e => {
    const copy = JSON.parse(JSON.stringify(data));
    const findperson = copy.filter(i => {
      if (e.target.value.length > 0) {
        return i.name.first
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      }
    });
    setsearch(findperson);
  };

  const addname = e => {
    setcontact(e.target.value);
  };

  const addtolist = () => {
    const copy = [...data];
    const obj = {
      name: {
        first: contact
      },
      picture: {
        thumbnail: "https://randomuser.me/api/portraits/thumb/women/31.jpg"
      }
    };

    copy.push(obj);
    setdata(copy);
    setcontact("");
  };

  const deleteMe = person => {
    const copydata = [...data];
    const filterlist = copydata.filter(n => n.name.first !== person.name.first);
    setdata(filterlist);
    const copysearch = [...search];
    const filtersearch = copysearch.filter(
      n => n.name.first !== person.name.first
    );
    setsearch(filtersearch);
  };

  const editMe = (person, index) => {
    const copysearch = [...search];
    copysearch[index].customedit = true;
    setsearch(copysearch);
  };

  const editOnChange = e => {
    seteditperson(e);
  };

  const editName = (person, index) => {
    const editcopysearch = [...search];
    editcopysearch[index].name.first = editperson;
    editcopysearch[index].customedit = false;
    setsearch(editcopysearch);
  };

  return (
    <div className="App">
      <input type="text" id="search" onChange={searchMe} />
      <div className="container">
        <Add add={addname} addtolist={addtolist} value={contact} />
        <Results
          search={search}
          delete={deleteMe}
          edit={editMe}
          editName={editName}
          editOnChange={editOnChange}
        />
        <Contacts contact={data} />
      </div>
    </div>
  );
};

export default Diary;
