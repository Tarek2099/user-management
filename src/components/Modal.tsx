import { useContextHook } from "../hooks/useContextHook";

const Modal = () => {
  // Import the context hook to access the context values
  const { state } = useContextHook();
  const styling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "10px",
    backgroundColor: "red",
    color: "white",
    padding: "10px 0px",
  };
  return (
    <div style={styling}>
      <p>{state.modalMessage}</p>
    </div>
  );
};

export default Modal;
