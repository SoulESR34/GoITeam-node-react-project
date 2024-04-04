// import React from "react";
// import styled from "styled-components";

// const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const ModalContent = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 8px;
// `;

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <ModalOverlay>
//       <ModalContent>
//         {children}
//         <button onClick={onClose}>Cerrar</button>
//       </ModalContent>
//     </ModalOverlay>
//   );
// };

// export default Modal;

import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import productos from "./Modal.json/productos.json";
import { Link } from "react-router-dom";
import styles from "./Modal.module.css";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Modal = ({ isOpen, onClose, children }) => {
  const [productCategories, setProductCategories] = useState([]);

  const handleCloseModal = useCallback(() => {
    if (isOpen) {
      onClose();
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickOutside = (event) => {
      if (event.target === event.currentTarget) {
        handleCloseModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleCloseModal]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await productos;
        setProductCategories(
          fetchedProducts.map((product) => product.categories)
        );
      } catch (err) {
        console.error("Error fetching products:", err.message);
      }
    };

    if (isOpen) {
      fetchProducts();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <div className={styles.modal}>
        <ModalContent className={styles["modal-content"]}>
          <CloseButton onClick={onClose}>×</CloseButton>
          {children}
          <ButtonContainer>
            <Link to="/login">
              <button className={styles.peso}>Comienza a perder peso</button>
            </Link>
          </ButtonContainer>
        </ModalContent>
      </div>
    </ModalOverlay>
  );
};

export default Modal;
