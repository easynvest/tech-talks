import React from 'react';
import { Query } from 'react-apollo';
import styled from 'react-emotion';
import Loading from '../Loading';
import Header from '../Header';
import VideosList from '../VideosList';
import GithubList from '../GithubList';
import { searchQuery } from '../../graphql';

const AppWrapper = styled('section')``;

const Container = styled('div')`
  width: 950px;
  margin: 120px auto 0 auto;

  & > section:first-child {
    margin-bottom: 100px;
  }
`;

const EmptyContent = styled('h1')`
  width: 700px;
  padding: 300px 0;
  margin: auto;
  text-align: center;
  font-size: 40px;
  color: #4E0250;
`;

const App = ({ search, setSearch }) => (
  <AppWrapper>
    <Header
      search={search}
      setSearch={setSearch}
    />
    <Query
      query={searchQuery}
      variables={{ search }}
    >
      {({ loading, data }) => {
        if (loading) return <Loading />;
        if (data) return (
          <Container>
            <GithubList data={data.organization} />
            <VideosList data={data.videos} />
          </Container>
        );

        return <EmptyContent>Desculpe! Não temos nada para mostrar no momento :(</EmptyContent>;
      }}
    </Query>
  </AppWrapper>
);

export default App;
