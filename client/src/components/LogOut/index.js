import React, { useState } from "react";
import Modal from "./Modal";

function LogOut() {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    sessionStorage.clear();
    window.location.replace("/");
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
