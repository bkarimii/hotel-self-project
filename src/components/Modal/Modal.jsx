import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, content, onClose }) => (
  <div className={`modal ${isOpen ? "open" : ""}`}>
    <div className="modal-content">
      <span className="close-btn" onClick={onClose}>
        Close ×
      </span>
      <div className="modal-body">{content}</div>
    </div>
  </div>
);

export default Modal;
