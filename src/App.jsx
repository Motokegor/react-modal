import React, { useState } from "react";
import "./App.scss";

function App() {
  function Modal({ onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <h2>Модальное окно</h2>
          <button onClick={onClose}>закрыть</button>
        </div>
      </div>
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  function openModal(){
    setIsModalOpen(true);
    setIsButtonVisible(false); 
  };

  function closeModal(){
    setIsModalOpen(false);
    setIsButtonVisible(true); 
  };

  return (
    <div className="app">
      {isButtonVisible && (
        <button onClick={openModal}>Открыть модальное окно</button>
      )}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;