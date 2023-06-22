import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { sideSearchText } from '@/constants/config/components';
import { icons } from '@/constants/icons';
import { useActions } from '@/hooks/useActions';
import { ICreator, ITweetBySearch } from '@/types';
import { checkIsFeedPath } from '@/utils/helpers/checkIsFeedPath';

import Alert from '../Alert';
import Loader from '../Loader';

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

const { MySearchSvg } = icons;

const SideSearch: FC<SideSearchProps<any>> = ({ placeholder, getData, Result, errorMessage }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { pathname } = useLocation();
  const isFeedPath = checkIsFeedPath(pathname);
  const { setIsAlertVisible } = useActions();
  const [searchValue, setSearchValue] = useState<string>('');

  const [users, setUsers] = useState<ICreator[]>([]);
  const [tweets, setTweets] = useState<ITweetBySearch[]>([]);

  const usersResult = users.map((data) => <Result {...data} key={data.id} />);
  const tweetsResult = tweets.map((data) => <Result {...data} key={data.id} />);

  const onHandlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const onHandlerSearchData = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
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

      if (newUsers.length === 0) {
        setIsAlertVisible({
          isVisible: true,
          message: errorMessage,
        });
      }

      if (newTweets.length === 0) {
        setIsAlertVisible({
          isVisible: true,
          message: errorMessage,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Wrapper>
      <SearchWrapper onSubmit={onHandlerSearchData}>
        <Button type="submit">
          <Icon src={MySearchSvg} alt={searchIconAlt} />
          <Input placeholder={placeholder} value={searchValue} onChange={onHandlerChange} />
        </Button>
      </SearchWrapper>
      {(users.length !== 0 || tweets.length !== 0) && (
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
