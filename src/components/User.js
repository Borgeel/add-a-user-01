import { useState } from "react";

const User = ({ setUserList, userList }) => {
  const [user, setUser] = useState({
    username: "",
    age: "",
    id: "",
  });

  // Change Handler
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(user);
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    setUserList([...userList, user]);
    setUser((prevState) => {
      return {
        ...prevState,
        username: "",
        age: "",
        id: Math.floor(Math.random() * 100),
      };
    });
  };

  return (
    <>
      <form className="user-input" onSubmit={submitHandler}>
        <label>
          Username
          <input
            type="text"
            value={user.username}
            name="username"
            onChange={changeHandler}
          />
        </label>
        <label>
          Age (years)
          <input
            type="text"
            value={user.age}
            name="age"
            onChange={changeHandler}
          />
        </label>
        <button type="submit">Add a user</button>
      </form>
    </>
  );
};

export default User;
