import React, { useState } from 'react';
import styles from "./page.module.css";



// Modal component
const Modal: React.FC<{ onClose: () => void }> = ({ onClose  }) => {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <p> added to cart!</p>
        <img src="/check-mark.png" alt="Tick Mark" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

// AddToCartButton component
const AddToCartButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleClick = () => {
    onClick();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.imgButton}>
      <button onClick={handleClick}>Add to cart</button>
      {showModal && <Modal onClose={closeModal} />}
    </div>
  );
};

export default AddToCartButton;
