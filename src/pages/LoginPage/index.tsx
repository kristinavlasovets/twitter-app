import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Alert from '@/components/Alert';
import { AppRoutes } from '@/components/AppRouter/types';
import Button from '@/components/Button';
import Loader from '@/components/Loader';
import { Colors, icons, loginPageText, validationErrors } from '@/constants';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { commonTheme } from '@/styles/theme';

import { ErrorText, Icon, Input, TextLink, Title, Wrapper } from './styles';
import { LoginFormInputProps } from './types';

const { emailError, passwordError } = validationErrors;

const {
  title,
  maxLengthValue,
  minLengthValue,
  twitterLogoAlt,
  emailPlaceholder,
  passwordPlaceholder,
  buttonText,
  linkText,
} = loginPageText;

const { MyLogoSvg } = icons;
const LoginPage: FC = () => {
  const { setUserThunk, setIsAlertVisible } = useActions();
  const { isLoading, isError } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputProps>({ mode: 'onChange' });

  const onHandlerLogin: SubmitHandler<LoginFormInputProps> = async ({ email, password }) => {
    try {
      setUserThunk({ email, password });
    } catch (e) {
      setIsAlertVisible({
        isVisible: true,
        message:
          isError || errors.email?.message || errors.password?.message || (e as Error).message,
      });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Wrapper onSubmit={handleSubmit(onHandlerLogin)}>
      <Icon src={MyLogoSvg} alt={twitterLogoAlt} />
      <Title>{title}</Title>
      {isError && <ErrorText data-cy="loginErrorText">{isError}</ErrorText>}
      <Input
        data-cy="emailField"
        placeholder={emailPlaceholder}
        type="email"
        {...register('email', {
          required: true,
        })}
      />
      {errors.email && <ErrorText data-cy="emailError">{emailError}</ErrorText>}
      <Input
        data-cy="passwordField"
        placeholder={passwordPlaceholder}
        type="password"
        {...register('password', {
          required: true,
          minLength: minLengthValue,
          maxLength: maxLengthValue,
        })}
      />
      {errors.password && <ErrorText data-cy="passwordError">{passwordError}</ErrorText>}

      <Button
        type="submit"
        backgroundColor={Colors.DARK_BLUE}
        color={Colors.WHITE}
        fontSize={commonTheme.fontSizes.xxs}
        fontFamily={commonTheme.fontFamilies.roboto}
      >
        {buttonText}
      </Button>

      <TextLink to={AppRoutes.HOME}>{linkText}</TextLink>
      <Alert />
    </Wrapper>
  );
};

export default LoginPage;
