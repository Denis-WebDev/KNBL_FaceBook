'use client';

import { useRouter } from 'next/navigation';

import { signInFacebookAction, singInActions } from '@/app/actions/auth';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const res = await singInActions(data);
      console.log(res);
      res === 200 && router.push('/');
    } catch (error) {
      alert(res.error);
    }
  };

  var singInFacebook = async () => {
    await signInFacebookAction();
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

        <button
          type="button"
          className={styles.FbLoginBtn}
          onClick={singInFacebook}
        >
          SignIn Facebook
        </button>

        {/* <a className={styles.link} href="/singUp">
          Sing Up
        </a> */}
      </div>
    </div>
  );
};

export default SignIn;
