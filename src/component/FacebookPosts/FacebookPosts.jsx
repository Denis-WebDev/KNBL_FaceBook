'use client';

import { useEffect, useState } from 'react';

import styles from './FacebookPosts.module.scss';
import PostCard from '@/ui/postCard/PostCard';

const FacebookPosts = ({ user }) => {
  const { 0: posts, 1: setPosts } = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postsData = await fetch(
          `https://graph.facebook.com/me/posts?fields=message,story,full_picture,created_time,attachments,permalink_url&limit=10&access_token=${user.token}`,
        ).then((res) => res.json());

        setPosts(postsData.data);
      } catch (error) {
        console.log(error);

        setPosts([]);
      }

      return;
    };

    fetchPost();
  }, []);

  return (
    <ul className={styles.postContainer}>
      {posts.length > 0 &&
        posts.map((el) => <PostCard key={el.id} post={el} />)}
    </ul>
  );
};

export default FacebookPosts;
