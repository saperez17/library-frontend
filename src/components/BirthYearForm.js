import React, { useState } from "react";
import { EDIT_AUTHOR_BIRTH_YEAR } from "queries";
import { useMutation } from "@apollo/client";

const BirthYearForm = () => {
  const [name, setName] = useState("");
  const [bornYear, setBornYear] = useState("");
  const [changeBirthYear, result] = useMutation(EDIT_AUTHOR_BIRTH_YEAR);

  const submit = (e) => {
    e.preventDefault();

    console.log("adding author");
    changeBirthYear({ variables: { name, born: parseInt(bornYear) } });
    setName("");
    setBornYear("");
  };
  return (
    <div>
      <h2>New Author</h2>
      <form onSubmit={submit}>
        <div>
          name{" "}
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born{" "}
          <input
            value={bornYear}
            onChange={({ target }) => setBornYear(target.value)}
          />
        </div>
        <button type="submot">submit form</button>
      </form>
    </div>
  );
};

export default BirthYearForm;
