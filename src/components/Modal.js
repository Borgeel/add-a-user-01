const Modal = ({ closeModal }) => {
  return (
    <div className="modal-background">
      <div className="modal">
        <button onClick={() => closeModal(false)}>X</button>
        <h3 className="modal-title">Invalid Input</h3>
        <p>Please enter a valid name and age</p>
        <button onClick={() => closeModal(false)}>Okay</button>
      </div>
    </div>
  );
};

export default Modal;
