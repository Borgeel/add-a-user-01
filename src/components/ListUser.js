const ListUser = ({ userList }) => {
  return (
    <div className="user-input">
      {userList?.map((user) => {
        return (
          <div className="user-input__individual" key={user.id}>
            <p>Username: {user.username} </p>
            <hr />
            <p>Age: {user.age} </p>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
