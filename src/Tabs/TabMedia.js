import React from 'react';
import Modal from '../Modal/';

export default function TabMedia({ zoomedMedia, onClose }) {
  return (
    <Modal onClose={onClose}>
      <img src={zoomedMedia.url} alt={zoomedMedia.alt} className="modal__media" />
    </Modal>
  );
}
