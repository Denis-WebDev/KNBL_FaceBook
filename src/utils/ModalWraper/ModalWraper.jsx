'use client';

import { useRef } from 'react';
import styles from './ModalWraper.module.scss';

const ModalWraper = ({ lib, children }) => {
  const modalRef = useRef(null);

  const handleCloseBtn = (e) => {
    if (e) e.stopPropagation();

    e.target.dataset.close &&
      document
        .querySelectorAll('.show')
        .forEach((el) => el.classList.remove('show'));
  };
  return (
    <output
      className={`${styles.backdrop} modal`}
      ref={modalRef}
      data-close="true"
      onClick={handleCloseBtn}
    >
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.modal_Close}
          // onClick={handleCloseBtn}
          aria-label="close modal"
          data-close="true"
        >
          <svg>
            <use xlinkHref="/icon/stripe-all.svg#icon-close" />
          </svg>
        </button>

        {children}
      </div>
    </output>
  );
};

export default ModalWraper;
