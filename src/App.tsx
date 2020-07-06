import React from 'react';
import {View, StatusBar} from 'react-native';
import {ApolloProvider} from '@apollo/react-hooks';
import {StoreProvider} from 'easy-peasy';
import {client} from './graphql';
import {store} from './store';
import {Theme} from './theme';
import {Routes} from './routes';
import {Rehydrate} from './components/Rehydrate';
import {Sentry} from './utils/sentry';

export function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider store={store}>
        {/* <Rehydrate> */}
        <View style={{backgroundColor: 'red', flex: 1}}>
          <StatusBar barStyle="light-content" backgroundColor={Theme.colors.primary} />
          <Routes />
        </View>
        {/* </Rehydrate> */}
      </StoreProvider>
    </ApolloProvider>
  );
}
