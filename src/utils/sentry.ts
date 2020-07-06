import * as SentrySDK from '@sentry/react-native';

if (!__DEV__) {
  SentrySDK.init({
    dsn: 'https://77ee9d6a974f412aac54630bcb8afb92@sentry.io/1816947',
  });
}

export const Sentry = {};
