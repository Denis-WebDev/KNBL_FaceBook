import styles from './Wrapper.module.scss';

import Header from '../Header/Header';
import FacebookPosts from '../FacebookPosts/FacebookPosts';
import Modal from '../Modal/Modal';

const Wrapper = ({ user }) => {
  return (
    <>
      <Header user={user} />
      <div className="container">{/* <FacebookPosts user={user} /> */}</div>
      <Modal />
    </>
  );
};

export default Wrapper;
