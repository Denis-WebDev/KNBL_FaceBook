'use server';

import {signIn, signOut} from '@/config/auth-config';

import {AuthError} from 'next-auth';


export const singInActions = async (formData) => {
  try {
    await signIn('credentials', {
      redirect: false,
      email: formData.get('email'),
      password: formData.get('password'),
    });
    return 200;


  } catch (error) {
    if (error.name === 'NEXT_REDIRECT') {

      return;
    }

    if (error instanceof AuthError) {
      switch (error.type || error.name) {
        case 'CredentialsSignin':
          return {status: 400, error: 'Invalid Value'};
        default:
          return {status: 400, error: 'Unknown Error Found'};
      }
    }
    throw error;
  }
};

export const signInFacebookAction = async () => {
  await signIn("facebook", {callbackUrl: "/sadasdas"});
};

export const singOutActions = async () => {
  await signOut();
};
