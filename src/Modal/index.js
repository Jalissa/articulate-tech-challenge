import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Modal(props) {
  const modalRoot = document.getElementById('modal-root');
  const el = document.createElement('div');

  useEffect(() => {
    el.classList.add('modal');
    el.addEventListener('click', () => {
      props.onClose();
    });
    modalRoot.appendChild(el);

    setTimeout(() => {
      requestAnimationFrame(() => {
        el.classList.add('open');
      });
    }, 200);

    return () => {
      requestAnimationFrame(() => {
        el.classList.remove('open');
      });
      setTimeout(() => {
        modalRoot.removeChild(el);
      }, 601);
    };
  }, []);

  return ReactDOM.createPortal(props.children, el);
}
