const Modal = ({ toggleModal }) => {
  return (
    <div className="modal">
      <h3>Invalid Input</h3>
      <p>Please enter a valid name and age</p>
      <button onClick={toggleModal}>Okay</button>
    </div>
  );
};

export default Modal;
