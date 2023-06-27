import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { getTweetsById } from '@/api/firebase/getData';
import { updateDocument, updateUser } from '@/api/firebase/updateData';
import {
  Colors,
  FirebaseCollections,
  icons,
  tweetField,
  userEditModalText,
  validationErrors,
  validationPatterns,
} from '@/constants';
import { useActions, useAppSelector } from '@/hooks';
import { userSelector } from '@/store/slices/userSlice/selectors';

import Alert from '../Alert';
import Button from '../Button';

import { Credentials, ErrorText, Form, Icon, Input, Title, Wrapper } from './styles';
import { UserEditModalProps, UserEditProps } from './types';

const {
  buttonText,
  title,
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

const UserEditModal: FC<UserEditModalProps> = (props) => {
  const { isModalVisible, onClose } = props;

  const { updateUser: updateUserAction, setIsAlertVisible } = useActions();
  const {
    gender: currentGender,
    name: currentName,
    surname: currentSurname,
    telegram: currentTelegram,
    id,
  } = useAppSelector(userSelector);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserEditProps>({ mode: 'onChange' });

  const handleFormSubmit: SubmitHandler<UserEditProps> = async ({
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
        gender: gender || currentGender,
        name: name || currentName,
        password,
        surname: surname || currentSurname,
        telegram: telegram || currentTelegram,
      });

      updateUserAction({
        gender: gender || currentGender,
        name: name || currentName,
        surname: surname || currentSurname,
        telegram: telegram || currentTelegram,
      });

      const userTweets = await getTweetsById(tweetField.creatorId, id);

      userTweets.forEach(async (item) => {
        await updateDocument({
          collection: FirebaseCollections.TWEETS,
          id: item.tweetId,
          newDoc: item,
        });
      });

      onClose();
    } catch (e) {
      setIsAlertVisible({
        isVisible: true,
        message: 'You need to re-signin to update password',
      });
    }
  };

  if (!isModalVisible) {
    return null;
  }

  return (
    <Wrapper>
      <Form data-cy="formWrapper" onSubmit={handleSubmit(handleFormSubmit)}>
        <Icon src={MyCloseSvg} alt="Cancel" onClick={onClose} />
        <Title>{title}</Title>
        <Credentials>{nameText}</Credentials>
        <Input
          data-cy="nameField"
          placeholder={currentName}
          type="text"
          {...register('name', { maxLength: maxLengthValue, pattern: namePattern })}
        />
        {errors.name && <ErrorText>{nameError}</ErrorText>}
        <Credentials>{surnameText}</Credentials>
        <Input
          data-cy="surnameField"
          placeholder={currentSurname}
          type="text"
          {...register('surname', { maxLength: maxLengthValue, pattern: namePattern })}
        />
        {errors.surname && <ErrorText>{surnameError}</ErrorText>}
        <Credentials>{telegramText}</Credentials>
        <Input
          data-cy="telegramField"
          placeholder={currentTelegram}
          type="text"
          {...register('telegram')}
        />
        <Credentials>{genderText}</Credentials>
        <Input
          data-cy="genderField"
          placeholder={currentGender}
          type="text"
          {...register('gender')}
        />
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
