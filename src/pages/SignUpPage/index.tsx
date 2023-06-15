import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

import { createDocument } from '@/api/firebase/createDocument';
import { signUpWithEmail } from '@/api/firebase/signUpWithEmail';
import MyLogoSvg from '@/assets/logo.svg';
import Alert from '@/components/Alert';
import { AppRoutes } from '@/components/AppRouter/types';
import Button from '@/components/Button';
import {
  defaultValueUserSignUp,
  FirebaseCollections,
  Gender,
  monthNames,
  signUpPageText,
  validationErrors,
  validationPatterns,
} from '@/constants/config';
import { Colors } from '@/constants/styles';
import { useActions } from '@/hooks/useActions';
import { getDays, getYears } from '@/utils/helpers/dateSelector';

import {
  DayYearSelector,
  ErrorText,
  Icon,
  IconWrapper,
  Input,
  MonthSelector,
  Selectors,
  Subtitle,
  Text,
  TextLink,
  Title,
  Wrapper,
} from './styles';
import { SignUpFormInputProps } from './types';

const {
  twitterLogoAlt,
  title,
  subTitle,
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  passwordPlaceholder,
  infoText,
  textType,
  emailType,
  passwordType,
  linkText,
  buttonText,
  minLengthValue,
  maxLengthValue,
} = signUpPageText;

const { namePattern, phonePattern } = validationPatterns;

const { nameError, phoneError, emailError, passwordError } = validationErrors;

const SignUpPage: FC = () => {
  const theme = useTheme();
  const { setUser, setIsAlertVisible } = useActions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<SignUpFormInputProps>({ mode: 'onChange' });

  const onHandlerSubmit: SubmitHandler<SignUpFormInputProps> = async ({
    name,
    email,
    phone,
    password,
    month,
    day,
    year,
  }) => {
    try {
      const user = await signUpWithEmail(email, password);
      if (user) {
        const token = await user.getIdToken();

        const { defaultSurname, defaultPhoto, defaultTelegram } = defaultValueUserSignUp;

        const newUser = {
          id: user?.uid,
          name,
          phone,
          surname: user?.displayName || defaultSurname,
          photo: user?.photoURL || defaultPhoto,
          telegram: defaultTelegram,
          gender: Gender.FEMALE,
          email,
          password,
          month,
          day,
          year,
          token,
        };

        await createDocument({
          collection: FirebaseCollections.USERS,
          document: newUser,
          id: user.uid,
        });

        setUser(newUser);
      }

      if (isValid) {
        reset();
      }
    } catch (e) {
      setIsAlertVisible({
        isVisible: true,
        message:
          errors.email?.message ||
          errors.name?.type ||
          errors.phone?.message ||
          errors.password?.message ||
          errors.day?.message ||
          errors.month?.message ||
          errors.year?.message ||
          (e as Error).message,
      });
    }
  };

  return (
    <Wrapper onSubmit={handleSubmit(onHandlerSubmit)}>
      <IconWrapper>
        <Icon src={MyLogoSvg} alt={twitterLogoAlt} />
      </IconWrapper>
      <Title>{title}</Title>
      <Input
        placeholder={namePlaceholder}
        type={textType}
        {...register('name', { required: true, maxLength: maxLengthValue, pattern: namePattern })}
      />
      {errors.name && <ErrorText>{nameError}</ErrorText>}
      <Input
        placeholder={phonePlaceholder}
        type={textType}
        {...register('phone', {
          required: true,
          maxLength: maxLengthValue,
          pattern: phonePattern,
        })}
      />
      {errors.phone && <ErrorText>{phoneError}</ErrorText>}
      <Input
        placeholder={emailPlaceholder}
        type={emailType}
        {...register('email', {
          required: true,
        })}
      />
      {errors.email && <ErrorText>{emailError}</ErrorText>}
      <Input
        placeholder={passwordPlaceholder}
        type={passwordType}
        {...register('password', {
          required: true,
          minLength: minLengthValue,
          maxLength: maxLengthValue,
        })}
      />
      {errors.password && <ErrorText>{passwordError}</ErrorText>}
      <TextLink to={AppRoutes.HOME}>{linkText}</TextLink>
      <Subtitle>{subTitle}</Subtitle>
      <Text>{infoText}</Text>
      <Selectors>
        <MonthSelector {...register('month')}>
          {monthNames.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </MonthSelector>
        <DayYearSelector {...register('day')}>
          {getDays().map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </DayYearSelector>
        <DayYearSelector {...register('year')}>
          {getYears().map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </DayYearSelector>
      </Selectors>
      <Button
        type="submit"
        backgroundColor={Colors.DARK_BLUE}
        color={Colors.WHITE}
        fontSize={theme?.fontSizes.xs}
      >
        {buttonText}
      </Button>
      <Alert />
    </Wrapper>
  );
};

export default SignUpPage;
