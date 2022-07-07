import { useState } from "react";
import ListUser from "./components/ListUser";
import User from "./components/User";

function App() {
  const [userList, setUserList] = useState([]);

  return (
    <div className="App">
      <User setUserList={setUserList} userList={userList} />
      {userList.length > 0 && <ListUser userList={userList} />}
    </div>
  );
}

export default App;
