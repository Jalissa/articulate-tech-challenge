import React, { useRef, useEffect } from 'react';
import Modal from '../Modal/';

export default function TabMedia({ zoomedMedia, onClose }) {
  // const ref = useRef({});

  // useEffect(() => {
  //   requestAnimationFrame(() => {
  //     ref.current.classList.add('open');
  //   });
  // }, []);
  return (
    <Modal onClose={onClose}>
      <img src={zoomedMedia.url} alt={zoomedMedia.alt} className="modal__media" />
    </Modal>
  );
}
