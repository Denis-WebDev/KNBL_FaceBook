'use client';

import { useRouter } from 'next/navigation';

import { singInActions } from '@/app/actions/auth';

import styles from './SingIn.module.scss';

const SingIn = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const res = await singInActions(data);
      res === 200 && router.push('/');
    } catch (error) {
      alert(res.error);
    }
  };

  return (
    <div className={styles.singIn}>
      <div className={styles.modalCont}>
        <form onSubmit={handleSubmit} className={styles.modal}>
          <h1>Log In</h1>
          <ul>
            <li>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                title="Email"
                required
                autoFocus
              />
              <label htmlFor="email">Email</label>
            </li>
            <li>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="******"
                title="Password"
                minLength="5"
                required
              />
              <label htmlFor="password">Password</label>
            </li>
          </ul>

          <button type="submit">
            Login <div></div>
          </button>
        </form>


        

        {/* <a className={styles.link} href="/singUp">
          Sing Up
        </a> */}
      </div>
    </div>
  );
};

export default SingIn;
