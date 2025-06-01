'use client';

import styles from './PostCard.module.scss';

const PostCard = ({ post }) => {
  const data = post.attachments.data[0];
  
  return (
    <li className={styles.card}>
      <div className={styles.card_textCont}>
        {data.title && (
          <h3 className={styles.card__textCont__title}>{data.title}</h3>
        )}
        {data.description && (
          <p className={styles.card__textCont__description}>
            {data.description}
          </p>
        )}
      </div>

      {data.type === 'photo' && (
        <img
          className={styles.card_img}
          src={data.media?.image?.src ?? '/no-photo.png'}
          alt="Image"
        />
      )}

      {data.type === 'share' && data.media.image && (
        <img
          className={styles.card_img}
          src={data.media?.image?.src ?? '/no-photo.png'}
          alt="Image"
        />
      )}
    </li>
  );
};

export default PostCard;
