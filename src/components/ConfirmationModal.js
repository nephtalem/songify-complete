/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const modalBackgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const modalStyle = css`
  background: #fff;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const buttonStyle = css`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
`;

const confirmButtonStyle = css`
  ${buttonStyle};
  background-color: #f56565;
  color: white;
  &:hover {
    background-color: #e53e3e;
  }
`;

const cancelButtonStyle = css`
  ${buttonStyle};
  background-color: #e2e8f0;
  color: #4a5568;
  &:hover {
    background-color: #cbd5e0;
  }
`;

const ConfirmationModal = ({ onConfirm, onCancel }) => (
  <div css={modalBackgroundStyle}>
    <div css={modalStyle}>
      <p>Are you sure you want to delete this song?</p>
      <div>
        <button css={confirmButtonStyle} onClick={onConfirm}>
          Confirm
        </button>
        <button css={cancelButtonStyle} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  </div>
);

export default ConfirmationModal;
