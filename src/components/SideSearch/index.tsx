import { ChangeEvent, FC, FormEvent, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import MySearchSvg from '@/assets/search.svg';
import { sideSearchText } from '@/constants/config';
import { useActions } from '@/hooks/useActions';

import Alert from '../Alert';

import {
  Button,
  Icon,
  Input,
  Nav,
  NavItem,
  NavItemLink,
  ResultList,
  ResultWrapper,
  SearchWrapper,
  TextLink,
  Title,
  Wrapper,
} from './styles';
import { SideSearchProps } from './types';

const { title, link, searchIconAlt, navLinks, copyrightText } = sideSearchText;

const SideSearch: FC<SideSearchProps<any>> = ({ placeholder, getData, Result, errorMessage }) => {
  const location = useLocation();
  const isFeedPath = location.pathname === '/feed';
  const { setIsAlertVisible } = useActions();
  const [searchValue, setSearchValue] = useState<string>('');

  const zeroLength = 0;

  const [users, setUsers] = useState<{ id: string; name: string; email: string; photo: string }[]>(
    []
  );
  const [tweets, setTweets] = useState<{ text: string; id: string }[]>([]);

  const usersResult = useMemo(
    () => users.map((data) => <Result {...data} key={data.id} />),
    [users]
  );

  const tweetsResult = useMemo(
    () => tweets.map((data) => <Result {...data} key={data.id} />),
    [tweets]
  );

  const onHandlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onHandlerSearchUsers = async (e: FormEvent) => {
    e.preventDefault();

    if (!searchValue && isFeedPath) {
      setUsers([]);
      return;
    }
    if (!searchValue && !isFeedPath) {
      setTweets([]);
      return;
    }
    const newUsers = await getData(searchValue);
    if (isFeedPath) {
      setUsers(newUsers);
    }

    const newTweets = await getData(searchValue);
    if (!isFeedPath) {
      setTweets(newTweets);
    }

    if (newUsers.length === zeroLength) {
      setIsAlertVisible({
        isVisible: true,
        message: errorMessage,
      });
    }

    if (newTweets.length === zeroLength) {
      setIsAlertVisible({
        isVisible: true,
        message: errorMessage,
      });
    }
  };

  return (
    <Wrapper>
      <SearchWrapper onSubmit={onHandlerSearchUsers}>
        <Button type="submit">
          <Icon src={MySearchSvg} alt={searchIconAlt} />
          <Input placeholder={placeholder} value={searchValue} onChange={onHandlerChange} />
        </Button>
      </SearchWrapper>
      {(users.length !== zeroLength || tweets.length !== zeroLength) && (
        <ResultWrapper>
          <Title>{title}</Title>
          <ResultList>{isFeedPath ? usersResult : tweetsResult}</ResultList>
          <TextLink to="#">{link}</TextLink>
        </ResultWrapper>
      )}
      <Nav>
        {navLinks.map(({ name, to }) => (
          <NavItem key={name}>
            <NavItemLink to={to}>{name}</NavItemLink>
          </NavItem>
        ))}
        <NavItem>{copyrightText}</NavItem>
      </Nav>
      <Alert />
    </Wrapper>
  );
};

export default SideSearch;
