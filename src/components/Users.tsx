import { useContextHook } from "../hooks/useContextHook";
import Modal from "./Modal";
import User from "./User";

const Users = () => {
  const { state } = useContextHook();
  return (
    <>
      {state.users.map((user: any) => (
        <User key={user.id} user={user} />
      ))}
      {state.isModalOpen && <Modal />}
    </>
  );
};

export default Users;
