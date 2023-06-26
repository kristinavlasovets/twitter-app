import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { icons, sideSearchText } from '@/constants';
import { useActions } from '@/hooks/useActions';
import { ICreator, ITweetBySearch } from '@/types';
import { checkPath } from '@/utils/helpers/checkPath';

import Alert from '../Alert';
import { AppRoutes } from '../AppRouter/types';
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
import { SetState, SideSearchProps } from './types';

const { title, link, searchIconAlt, navLinks, copyrightText } = sideSearchText;

const { MySearchSvg } = icons;

const SideSearch: FC<SideSearchProps<any>> = (props) => {
  const { placeholder, getData, Result, errorMessage } = props;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { pathname } = useLocation();
  const isFeedPath = checkPath(pathname, AppRoutes.FEED);
  const { setIsAlertVisible } = useActions();
  const [searchValue, setSearchValue] = useState<string>('');

  const [users, setUsers] = useState<ICreator[]>([]);
  const [tweets, setTweets] = useState<ITweetBySearch[]>([]);

  const usersResult = users.map((data) => <Result {...data} key={data.id} />);
  const tweetsResult = tweets.map((data) => <Result {...data} key={data.id} />);

  const onHandlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsLoading(false);
    const { value } = e.target;
    setSearchValue(value);
  };

  const onHandlerSearchData = async <T,>(stateSetter: SetState<T[]>) => {
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

  const onHandlerSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isFeedPath) onHandlerSearchData(setUsers);
    if (!isFeedPath) onHandlerSearchData(setTweets);
  };

  return (
    <Wrapper>
      <SearchWrapper onSubmit={onHandlerSubmit}>
        <Button type="submit">
          <Icon src={MySearchSvg} alt={searchIconAlt} />
        </Button>
        <Input placeholder={placeholder} value={searchValue} onChange={onHandlerChange} />
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
