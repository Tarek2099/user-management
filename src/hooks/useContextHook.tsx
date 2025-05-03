import { createContext, useContext } from "react";

interface State {
  users: { id: string; name: string; email: string }[];
  isModalOpen: boolean;
  modalMessage: string;
}

const Context = createContext<State>({
  users: [],
  isModalOpen: false,
  modalMessage: "",
});

export const useContextHook = () => useContext(Context);
