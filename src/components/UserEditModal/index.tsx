import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { getTweetsById } from '@/api/firebase/getData';
import { updateDocument, updateUser } from '@/api/firebase/updateData';
import {
  FirebaseCollections,
  tweetField,
  validationErrors,
  validationPatterns,
} from '@/constants/config';
import { userEditModalText } from '@/constants/config/components';
import { icons } from '@/constants/icons';
import { Colors } from '@/constants/styles';
import { useActions } from '@/hooks/useActions';
import { useAppSelector } from '@/hooks/useAppSelector';
import { userSelector } from '@/store/slices/userSlice/selectors';

import Alert from '../Alert';
import Button from '../Button';

import { Credentials, ErrorText, Form, Icon, Input, Title, Wrapper } from './styles';
import { UserEditModalProps, UserEditProps } from './types';

const {
  buttonText,
  title,
  cancelAlt,
  genderText,
  nameText,
  passwordText,
  surnameText,
  telegramText,
  maxLengthValue,
  minLengthValue,
} = userEditModalText;
const { namePattern } = validationPatterns;
const { nameError, surnameError, passwordError } = validationErrors;

const { MyCloseSvg } = icons;

const UserEditModal: FC<UserEditModalProps> = ({ isModalVisible, setIsModalVisible }) => {
  const { updateUser: updateUserAction, setIsAlertVisible } = useActions();
  const {
    gender: currGender,
    name: currName,
    surname: currSurname,
    telegram: currTelegram,
    id,
  } = useAppSelector(userSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserEditProps>({ mode: 'onChange' });

  const onHandlerSubmit: SubmitHandler<UserEditProps> = async ({
    gender,
    name,
    password,
    surname,
    telegram,
  }) => {
    try {
      if (telegram && !telegram.includes('@')) {
        telegram = `@${telegram}`;
      }
      await updateUser({
        gender: gender || currGender,
        name: name || currName,
        password,
        surname: surname || currSurname,
        telegram: telegram || currTelegram,
      });

      updateUserAction({
        gender: gender || currGender,
        name: name || currName,
        surname: surname || currSurname,
        telegram: telegram || currTelegram,
      });

      const userTweets = await getTweetsById(tweetField.creatorId, id);

      userTweets.forEach(async (item) => {
        await updateDocument({
          collection: FirebaseCollections.TWEETS,
          id: item.tweetId,
          newDoc: item,
        });
      });

      setIsModalVisible!(false);
    } catch (e) {
      setIsAlertVisible({
        isVisible: true,
        message: 'Error',
      });
    }
  };

  const onHandlerClose = () => {
    setIsModalVisible!(false);
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onHandlerSubmit)}>
        <Icon src={MyCloseSvg} alt={cancelAlt} onClick={onHandlerClose} />
        <Title>{title}</Title>
        <Credentials>{nameText}</Credentials>
        <Input
          data-cy="nameField"
          placeholder={currName}
          type="text"
          {...register('name', { maxLength: maxLengthValue, pattern: namePattern })}
        />
        {errors.name && <ErrorText>{nameError}</ErrorText>}
        <Credentials>{surnameText}</Credentials>
        <Input
          data-cy="surnameField"
          placeholder={currSurname}
          type="text"
          {...register('surname', { maxLength: maxLengthValue, pattern: namePattern })}
        />
        {errors.surname && <ErrorText>{surnameError}</ErrorText>}
        <Credentials>{telegramText}</Credentials>
        <Input
          data-cy="telegramField"
          placeholder={currTelegram}
          type="text"
          {...register('telegram')}
        />
        <Credentials>{genderText}</Credentials>
        <Input data-cy="genderField" placeholder={currGender} type="text" {...register('gender')} />
        <Credentials>{passwordText}</Credentials>
        <Input
          placeholder="type new password"
          type="password"
          {...register('password', { minLength: minLengthValue, maxLength: maxLengthValue })}
        />
        {errors.password && <ErrorText>{passwordError}</ErrorText>}
        <Button type="submit" backgroundColor={Colors.DARK_BLUE} color={Colors.WHITE}>
          {buttonText}
        </Button>
      </Form>
      <Alert />
    </Wrapper>
  );
};

export default UserEditModal;
