'use client';

import { singOutActions } from '@/app/actions/auth';

import styles from './Header.module.scss';

const Header = ({ user }) => {
  var logOut = async () => {
    await singOutActions();
  };

  var addPostBtn = () => {
    const modal = document.querySelector('#addPost');
  
    modal.classList.add('show');
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_wrapper}>
        <div className={styles.user}>
          <img
            className={styles.user_img}
            src={user.image}
            alt={user.name}
            width={60}
            height={60}
          />
          <p className={styles.user_name}>{user.name}</p>
        </div>
        <div className={styles.btn}>
          <button type="button" onClick={addPostBtn}>
            Create Post
          </button>
          <button type="button" onClick={logOut}>
            {' '}
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
