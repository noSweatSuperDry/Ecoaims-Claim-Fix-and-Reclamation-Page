import React, { useState } from "react";

function Modal(props) {
  const handleConfirm = () => {
    props.onConfirm();
    props.onClose();
  };

  return (
    <div>
      <div className="loginForm">
        <h1>{props.title}</h1>
        <h2>{props.message}</h2>
        <div>
          <button className="idPassCard" onClick={props.onClose}>
            Cancel
          </button>
          <button className="idPassCard" onClick={handleConfirm}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

function LogOut() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  const handleConfirmLogout = () => {
    handleSubmit();
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="idPassCard" onClick={handleShowModal}>
        Log Out
      </button>
      {showModal && (
        <Modal
          title="Log out"
          message="Are you sure you want to log out?"
          onClose={handleCloseModal}
          onConfirm={handleConfirmLogout}
        />
      )}
    </div>
  );
}

export default LogOut;
