import { useState } from "react";
import Modal from "./Modal";

const User = ({ setUserList, userList }) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
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

  // Toggle Modal
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
      {isModalVisible && <Modal toggleModal={toggleModal} />}
    </>
  );
};

export default User;
