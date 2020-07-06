import ApolloClient from 'apollo-boost';
import AsyncStorage from '@react-native-community/async-storage';
import {Config} from '../config';
import {Alert} from 'react-native';

export const client = new ApolloClient({
  uri: Config.GRAPHQL_URL,
  request: async operation => {
    const headers: any = {};
    const token = await AsyncStorage.getItem('token');

    if (token) {
      headers.authorization = token;
    }

    operation.setContext({headers});
  },
  onError: data => {
    if (data.graphQLErrors && data.operation.operationName !== 'GetSession') {
      const errors = data.graphQLErrors.map(e => e.message).join(', ');
      Alert.alert(errors);
    }
  },
});
