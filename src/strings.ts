import {Config} from './config';

interface IStrings {
  Login: {
    title: string;
    subtitle: string;
    emailInputLabel: string;
    passwordInputLabel: string;
    submitButtonLabel: string;
    recoverPasswordLabel: string;
  };
}

export const locales: {[language: string]: IStrings} = {
  en: {
    Login: {
      title: 'DistroLogiq',
      subtitle: 'Use your email and password to sign in',
      emailInputLabel: 'Email',
      passwordInputLabel: 'Password',
      submitButtonLabel: 'Sign In',
      recoverPasswordLabel: 'forgot your password?',
    },
  },
};

export const Strings: IStrings = locales[Config.language];
