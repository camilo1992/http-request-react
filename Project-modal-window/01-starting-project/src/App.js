import { React, useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/UserList/UserList";

let users = [];

function App() {
  const createUser = (inf) => {
    users.push(inf);
    setEnteredUserList((prev) => {
      return [...users];
    });
  };

  const [enteredUserList, setEnteredUserList] = useState(users);

  return (
    <>
      <AddUser onInfHandler={createUser} />
      <UserList users={enteredUserList} />
    </>
  );
}

export default App;
