import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { getDocument } from '@/api/firebase/getDocument';
import { signInWithEmail } from '@/api/firebase/signInWithEmail';
import MyLogoSvg from '@/assets/logo.svg';
import Alert from '@/components/Alert';
import { AppRoutes } from '@/components/AppRouter/types';
import Button from '@/components/Button';
import { FirebaseCollections, loginPageText } from '@/constants/config';
import { Colors } from '@/constants/styles';
import { useActions } from '@/hooks/useActions';
import { IUser } from '@/types';

import { Icon, Input, TextLink, Title, Wrapper } from './styles';
import { LoginFormInputProps } from './types';

const {
  title,
  twitterLogoAlt,
  emailPlaceholder,
  emailType,
  passwordPlaceholder,
  passwordType,
  buttonText,
  linkText,
} = loginPageText;

const LoginPage: FC = () => {
  const theme = useTheme();
  const { setUser, setIsAlertVisible } = useActions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<LoginFormInputProps>({ mode: 'onChange' });

  const onHandlerLogin: SubmitHandler<LoginFormInputProps> = async ({ email, password }) => {
    try {
      const user = await signInWithEmail(email, password);

      if (isValid) {
        reset();
      }
      const existedUser = (await getDocument(FirebaseCollections.USERS, user!.uid)) as
        | IUser
        | false;

      if (existedUser) {
        setUser(existedUser);
      }
    } catch (e) {
      setIsAlertVisible({
        isVisible: true,
        message: errors.email?.message || errors.password?.message || (e as Error).message,
      });
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit(onHandlerLogin)}>
      <Icon src={MyLogoSvg} alt={twitterLogoAlt} />
      <Title>{title}</Title>
      <Input
        data-cy="emailField"
        placeholder={emailPlaceholder}
        type={emailType}
        {...register('email')}
      />
      <Input
        data-cy="passwordField"
        placeholder={passwordPlaceholder}
        type={passwordType}
        {...register('password')}
      />
      <Button
        type="submit"
        backgroundColor={Colors.DARK_BLUE}
        color={Colors.WHITE}
        fontSize={theme?.fontSizes.xxs}
        fontFamily={theme?.fontFamilies.roboto}
      >
        {buttonText}
      </Button>
      <TextLink to={AppRoutes.HOME}>{linkText}</TextLink>
      <Alert />
    </Wrapper>
  );
};

export default LoginPage;
