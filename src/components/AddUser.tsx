import { useState } from "react";
import { useContextHook } from "../hooks/useContextHook";

const AddUser = () => {
  const { dispatch } = useContextHook();
  const [newUserName, setNewUserName] = useState("");
  const [email, setEmail] = useState("");
  const nameInputHandler = (e) => {
    e.preventDefault();
    setNewUserName(e.target.value);
  };
  const emailInputHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    const newUser = {
      id: Math.ceil(Math.random() * 100),
      name: newUserName,
      email: email,
    };
    dispatch({ type: "ADD_USER", payload: newUser });
    dispatch({ type: "OPEN_MODAL", payload: `User ${newUserName} added` });
    setNewUserName("");
    setEmail("");
  };

  const designFormDiv = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    margin: "10px",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  };
  const designForm = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textAlign: "center",
  };
  const inputDesign = {
    padding: "10px 0px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
  };
  const buttonDesign = {
    padding: "10px 0px",
    border: "none",
    outline: "none",
    borderRadius: "5px",
    backgroundColor: "darkgreen",
    pointer: "cursor",
    color: "#fff",
  };
  return (
    <div style={designFormDiv}>
      <h2>Input User Name</h2>
      <form onSubmit={formHandler} style={designForm}>
        <input
          type="text"
          placeholder="Name"
          value={newUserName}
          onChange={nameInputHandler}
          style={inputDesign}
          required
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={emailInputHandler}
          style={inputDesign}
          required
        />
        <button type="submit" style={buttonDesign}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
