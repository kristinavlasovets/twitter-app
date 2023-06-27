import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { createDocument } from '@/api/firebase/createDocument';
import { signUpWithEmail } from '@/api/firebase/signUpWithEmail';
import Alert from '@/components/Alert';
import { AppRoutes } from '@/components/AppRouter/types';
import Button from '@/components/Button';
import {
  Colors,
  defaultValueUserSignUp,
  FirebaseCollections,
  Gender,
  icons,
  monthNames,
  signUpPageText,
  validationErrors,
  validationPatterns,
} from '@/constants';
import { useActions } from '@/hooks';
import { commonTheme } from '@/styles/theme';
import { getDays, getYears } from '@/utils';

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
  title,
  subTitle,
  namePlaceholder,
  emailPlaceholder,
  phonePlaceholder,
  passwordPlaceholder,
  infoText,
  linkText,
  buttonText,
  minLengthValue,
  maxLengthValue,
} = signUpPageText;

const { namePattern, phonePattern } = validationPatterns;

const { nameError, phoneError, emailError, passwordError } = validationErrors;

const { MyLogoSvg } = icons;

const SignUpPage: FC = () => {
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);
  const { setUser, setIsAlertVisible } = useActions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<SignUpFormInputProps>({ mode: 'onChange' });

  const handleSetMonth = (event: React.ChangeEvent<{ value: unknown }>) => {
    const monthIndex = monthNames.indexOf(event.target.value as string);
    setMonth(monthIndex);
  };

  const handleSetYear = (event: React.ChangeEvent<{ value: unknown }>) => {
    setYear(Number(event.target.value as string));
  };

  const handleFormSubmit: SubmitHandler<SignUpFormInputProps> = async ({
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
        const nameLowercase = name.toLowerCase();

        const { defaultSurname, defaultPhoto, defaultTelegram } = defaultValueUserSignUp;

        const newUser = {
          id: user?.uid,
          name,
          nameLowercase,
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
    <Wrapper onSubmit={handleSubmit(handleFormSubmit)}>
      <IconWrapper>
        <Icon src={MyLogoSvg} alt="Twitter Logo" />
      </IconWrapper>
      <Title>{title}</Title>
      <Input
        data-cy="nameField"
        placeholder={namePlaceholder}
        type="text"
        {...register('name', { required: true, maxLength: maxLengthValue, pattern: namePattern })}
      />
      {errors.name && <ErrorText data-cy="nameError">{nameError}</ErrorText>}
      <Input
        data-cy="phoneField"
        placeholder={phonePlaceholder}
        type="text"
        {...register('phone', {
          required: true,
          maxLength: maxLengthValue,
          pattern: phonePattern,
        })}
      />
      {errors.phone && <ErrorText data-cy="phoneError">{phoneError}</ErrorText>}
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
      <TextLink to={AppRoutes.HOME}>{linkText}</TextLink>
      <Subtitle>{subTitle}</Subtitle>
      <Text>{infoText}</Text>
      <Selectors>
        <MonthSelector {...register('month')} onChange={handleSetMonth}>
          {monthNames.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </MonthSelector>
        <DayYearSelector {...register('day')}>
          {getDays(year, month).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </DayYearSelector>
        <DayYearSelector {...register('year')} onChange={handleSetYear}>
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
        fontSize={commonTheme.fontSizes.xs}
      >
        {buttonText}
      </Button>
      <Alert />
    </Wrapper>
  );
};

export default SignUpPage;
