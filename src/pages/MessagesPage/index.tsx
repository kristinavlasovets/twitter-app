import { FC } from 'react';

import Header from '@/components/Header';

import { Title, Wrapper } from './styles';

const MessagesPage: FC = () => (
  <Wrapper>
    <Header />
    <Title>Messages Page</Title>
  </Wrapper>
);

export default MessagesPage;
