import { createContext, useReducer } from "react";
import { AiFillStar } from "react-icons/ai";
import initialState from "../UseReducer/InitialState";
import reducer from "../UseReducer/reducer";

// Create the context
export const MyContext = createContext([]);

// Create a provider component
const ContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
        AiFillStar,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
export default ContextProvider;
