import { useState } from "react";
import Modal from "./Modal";

const User = ({ setUserList, userList }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
  };
  // Submit Handler
  const submitHandler = (e) => {
    const isFormEmpty =
      user.username.trim().length === 0 && user.age.trim().length === 0;
    e.preventDefault();
    !isFormEmpty && setUserList([...userList, user]);
    // Modal conditional
    if (isFormEmpty) {
      setIsModalVisible(true);
    }
    // Clear inputs
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
      {isModalVisible && <Modal closeModal={setIsModalVisible} />}
    </>
  );
};

export default User;
