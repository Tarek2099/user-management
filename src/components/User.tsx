import { useContextHook } from "../hooks/useContextHook";

const User = (user: any) => {
  const { state, dispatch } = useContextHook();

  const { id, name, email } = user;
  const styling = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
    margin: "10px",
    backgroundColor: "#f0f0f0",
    padding: "20px",
    borderRadius: "10px",
  };
  const getIDHandler = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
    dispatch({ type: "OPEN_MODAL", payload: `User with ID ${id} deleted` });
  };
  return (
    <div style={styling}>
      <h2>User ID: {id}</h2>
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <button onClick={() => getIDHandler(id)}>Delete</button>
    </div>
  );
};

export default User;
