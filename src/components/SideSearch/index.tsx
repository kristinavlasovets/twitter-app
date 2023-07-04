import { ChangeEvent, FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { icons, sideSearchText } from '@/constants';
import { useActions } from '@/hooks';
import { ICreator, ITweetBySearch } from '@/types';
import { checkPath } from '@/utils';

import Alert from '../Alert';
import { AppRoutes } from '../AppRouter/types';
import Loader from '../Loader';
import TweetSearchResult from '../TweetSearchResult';
import UserSearchResult from '../UserSearchResult';

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
import { SetState, SideSearchProps } from './types';

const { title, link, navLinks, copyrightText } = sideSearchText;

const { MySearchSvg } = icons;

const SideSearch = (props: SideSearchProps) => {
  const { setIsAlertVisible } = useActions();

  const { placeholder, getData, errorMessage } = props;

  const { pathname } = useLocation();
  const isFeedPath = checkPath(pathname, AppRoutes.FEED);

  const [searchValue, setSearchValue] = useState<string>('');
  const [users, setUsers] = useState<ICreator[]>([]);
  const [tweets, setTweets] = useState<ITweetBySearch[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const usersResult = users.map((data) => <UserSearchResult {...data} key={data.id} />);
  const tweetsResult = tweets.map((data) => <TweetSearchResult {...data} key={data.id} />);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(false);
    const { value } = e.target;
    setSearchValue(value);
  };

  const handleSearchData = async <T,>(stateSetter: SetState<T[]>) => {
    setIsLoading(true);
    if (searchValue) {
      const newData = (await getData(searchValue)) as T[];

      if (newData.length === 0) {
        setIsAlertVisible({
          isVisible: true,
          message: errorMessage,
        });
      }

      stateSetter(newData);
    } else {
      stateSetter([]);
    }
    setIsLoading(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isFeedPath) handleSearchData(setUsers);
    if (!isFeedPath) handleSearchData(setTweets);
  };

  return (
    <Wrapper>
      <SearchWrapper onSubmit={handleSubmit}>
        <Button type="submit">
          <Icon src={MySearchSvg} alt="Search users" />
        </Button>
        <Input placeholder={placeholder} value={searchValue} onChange={handleChange} />
      </SearchWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        (users.length !== 0 || tweets.length !== 0) && (
          <ResultWrapper>
            <Title>{title}</Title>
            <ResultList>{isFeedPath ? usersResult : tweetsResult}</ResultList>
            <TextLink to="#">{link}</TextLink>
          </ResultWrapper>
        )
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
