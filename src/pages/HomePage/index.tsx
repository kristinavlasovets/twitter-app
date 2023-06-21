import { FC } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { createDocument } from '@/api/firebase/createDocument';
import { getDocument } from '@/api/firebase/getDocument';
import Alert from '@/components/Alert';
import { AppRoutes } from '@/components/AppRouter/types';
import { defaultValueUserSignUp, FirebaseCollections, Gender } from '@/constants/config';
import { homePageText } from '@/constants/config/pages';
import { icons } from '@/constants/icons';
import { useActions } from '@/hooks/useActions';
import { auth } from '@/lib/firebase';
import { IUser } from '@/types';

import {
  Banner,
  ButtonIcon,
  ButtonLink,
  ButtonWithIcon,
  ButtonWrapper,
  Footer,
  Form,
  Icon,
  IconWrapper,
  Main,
  Nav,
  NavItem,
  NavItemLink,
  SubTitle,
  Text,
  TextLink,
  Title,
  Wrapper,
} from './styles';

const {
  bannerAlt,
  twitterLogoAlt,
  title,
  subTitle,
  googleLogoAlt,
  signUpGoogleText,
  signUpEmailText,
  termsText,
  termsOne,
  termsTwo,
  termsThree,
  question,
  loginText,
  navLinks,
  copyrightText,
} = homePageText;

const {
  defaultName,
  defaultSurname,
  defaultPhoto,
  defaultTelegram,
  defaultEmail,
  defaultPhone,
  defaultPassword,
  defaultMonth,
  defaultDay,
  defaultYear,
  defaultToken,
} = defaultValueUserSignUp;

const { MyBanner, MyGoogleSvg, MyLogoSvg } = icons;

const { SIGN_UP, LOGIN } = AppRoutes;

const HomePage: FC = () => {
  const { setUser, setIsAlertVisible } = useActions();

  const onHandlerGoogleSignUp = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const { user } = result;

      const existedUser = (await getDocument(FirebaseCollections.USERS, user!.uid)) as
        | IUser
        | false;

      const id = user.uid;
      const name = user.displayName?.split(' ')[0] || defaultName;
      const nameLowercase = name.toLowerCase();
      const phone = defaultPhone;
      const surname = user.displayName?.split(' ')[1] || defaultSurname;
      const photo = user.photoURL || defaultPhoto;
      const telegram = defaultTelegram;
      const email = user.email ? user.email : defaultEmail;
      const password = defaultPassword;
      const month = defaultMonth;
      const day = defaultDay;
      const year = defaultYear;
      const token = defaultToken;

      const newUser = {
        id: user?.uid,
        name,
        nameLowercase,
        phone,
        surname,
        photo,
        telegram,
        gender: Gender.FEMALE,
        email,
        password,
        month,
        day,
        year,
        token,
      };

      if (existedUser) {
        setUser(existedUser);
      } else {
        await createDocument({
          collection: FirebaseCollections.USERS,
          document: newUser,
          id,
        });
        setUser(newUser);
      }
    } catch (e) {
      setIsAlertVisible({
        isVisible: true,
        message: (e as Error).message,
      });
    }
  };

  return (
    <Wrapper>
      <Main>
        <Banner src={MyBanner} alt={bannerAlt} />
        <Form>
          <IconWrapper>
            <Icon src={MyLogoSvg} alt={twitterLogoAlt} />
          </IconWrapper>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <ButtonWrapper onClick={onHandlerGoogleSignUp}>
            <ButtonWithIcon>
              <ButtonIcon src={MyGoogleSvg} alt={googleLogoAlt} />
              {signUpGoogleText}
            </ButtonWithIcon>
          </ButtonWrapper>
          <ButtonLink data-cy="signUpLink" to={SIGN_UP}>
            {signUpEmailText}
          </ButtonLink>
          <Text>
            {termsText}
            <TextLink to={navLinks[2].to}>{navLinks[2].name}</TextLink>
            {termsOne}
            <TextLink to={navLinks[3].to}>{navLinks[3].name}</TextLink>
            {termsTwo}
            <TextLink to={navLinks[4].to}>{navLinks[4].name}</TextLink>
            {termsThree}
          </Text>
          <Text>
            {question}
            <TextLink data-cy="logInLink" to={LOGIN}>
              {loginText}
            </TextLink>
          </Text>
        </Form>
      </Main>
      <Footer>
        <Nav>
          {navLinks.map(({ name, to }) => (
            <NavItem key={name}>
              <NavItemLink to={to}>{name}</NavItemLink>
            </NavItem>
          ))}
          <NavItem>{copyrightText}</NavItem>
        </Nav>
      </Footer>
      <Alert />
    </Wrapper>
  );
};

export default HomePage;
