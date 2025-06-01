'use client';

import { publishPost_Actions } from '@/app/actions/postActions';
import styles from './ModalAddPost.module.scss';

const ModalAddPost = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;

    try {
      await publishPost_Actions(message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="addPost" className={styles.wraper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea name="message" className={styles.form_text} />
        <button className={styles.form_button} type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default ModalAddPost;
