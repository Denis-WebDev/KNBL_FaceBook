'use client';

import { singOutActions } from '@/app/actions/auth';

import styles from './Wrapper.module.scss';

const Wrapper = ({ user }) => {
  var logOut = async () => {
    await singOutActions();
  };

  return (
    <div>
      ;sksalflsafjlsfjlsd
      <button onClick={logOut}> Log Out</button>
    </div>
  );
};

export default Wrapper;
