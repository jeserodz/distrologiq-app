import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {KeyboardAvoidingView, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Formik, FormikProps} from 'formik';
import {Text} from '../../components/Text';
import {Input} from '../../components/Input';
import {Theme} from '../../theme';
import {Button} from '../../components/Button';
import {Link} from '../../components/Link';
import {Strings} from '../../strings';
import signInBanner from '../../images/sign-in-banner.png';
import {NavigationInjectedProps} from 'react-navigation';
import {FormValues, formSchema, formInitialValues} from './LoginScreen.form';
import {useLoginMutation, useGetSessionQuery} from '../../graphql';

const Container = styled.View`
  flex: 1;
  background: ${Theme.colors.backgroundDark};
`;

const Banner = styled.View`
  width: 100%;
  height: ${Theme.getHeight(239)}px;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: ${Theme.getHeight(48)}px;
`;

const BannerBackground = styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
`;
const Content = styled.ScrollView`
  flex: 1;
  padding: 45px 25px;
`;

const Separator = styled.View`
  flex: 1;
`;

const PasswordRecoveryLink = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-bottom: 100px;
`;

export function LoginScreen(props: NavigationInjectedProps) {
  const {data: session} = useGetSessionQuery();
  const [login] = useLoginMutation();

  async function handleSubmit(values: FormValues) {
    const {data} = await login({variables: values});
    if (data) {
      AsyncStorage.setItem('token', data.login.jwt);
      props.navigation.navigate('App');
    }
  }

  useEffect(() => {
    if (!session) return;
    props.navigation.navigate('App');
  }, [session]);

  return (
    <Formik
      validationSchema={formSchema}
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      render={({
        values,
        errors,
        setFieldValue,
        submitCount,
        submitForm,
      }: FormikProps<FormValues>) => (
        <Container>
          <Banner>
            <BannerBackground source={signInBanner} />
            <Text font={Text.Fonts.ArvoBold} size={36} marginBottom={10}>
              {Strings.Login.title}
            </Text>
            <Text size={12}>{Strings.Login.subtitle}</Text>
          </Banner>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={{flex: 1}}>
            <Content>
              <Input
                label={Strings.Login.emailInputLabel}
                value={values.username}
                onChangeText={(text: string) => setFieldValue('username', text)}
                autoCorrect={false}
                autoCapitalize="none"
                error={!!errors.username && !!submitCount}
                helperText={errors.username}
              />
              <Input
                label={Strings.Login.passwordInputLabel}
                secureTextEntry
                value={values.password}
                onChangeText={(text: string) => setFieldValue('password', text)}
                autoCorrect={false}
                autoCapitalize="none"
                error={!!errors.password && !!submitCount}
                helperText={errors.password}
              />
              <Separator />
              <Button
                label={Strings.Login.submitButtonLabel}
                style={{marginBottom: 12}}
                onPress={submitForm}
              />
              <PasswordRecoveryLink>
                <Link label={Strings.Login.recoverPasswordLabel} screen="PasswordRecovery" />
              </PasswordRecoveryLink>
            </Content>
          </KeyboardAvoidingView>
        </Container>
      )}
    />
  );
}
