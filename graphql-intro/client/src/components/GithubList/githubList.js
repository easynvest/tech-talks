import React from 'react';
import styled from 'react-emotion';
import RepositoryIcon from '../../assets/img/repository.svg';

const Wrapper = styled('section')``;

const Link = styled('a')``;

const GithubWrapper = styled('section')`
  display: flex;
  flex-flow: row wrap;
`;

const Title = styled('h1')`
  display: block;
  padding: 10px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #CCC;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #4E0250;
`;

const Repository = styled('div')`
  position: relative;
  padding: 20px;
  margin: 10px 8px;
  cursor: pointer;
  width: 180px;
  text-align: center;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`;

const RepositoryImage = styled('img')``;

const RepositoryName = styled('h4')`
  padding: 20px 0 0 0;
  font-weight: normal;
  color: #333;
`;

const RepositoryInfo = styled('div')`
  padding: 20px 0 0 0;
  text-align: center;
`;

const RepositoryLabel = styled('span')`
  padding: 5px;
  margin: 0 5px;
  color: white;
  font-size: 12px;
  background: #4E0250;
  border-radius: 5px;
  transform: rotate(-25deg);
`;

const GithubList = ({ data }) => (
  <Wrapper>
    <Title>Github</Title>
    <GithubWrapper>
      {data.repositories.map(r => (
        <Link
          target="_blank"
          key={r.name}
          href={`https://github.com/${data.name.toLowerCase()}/${r.name}`}
        >
          <Repository>
            <RepositoryImage
              src={RepositoryIcon}
              width={70}
            />
            <RepositoryName>{r.name}</RepositoryName>
            <RepositoryInfo>
              {r.language && (
                <RepositoryLabel>{r.language}</RepositoryLabel>
              )}
              <RepositoryLabel>{`${r.stargazers_count} Stars`}</RepositoryLabel>
            </RepositoryInfo>
          </Repository>
        </Link>
      ))}
    </GithubWrapper>
  </Wrapper>
);

export default GithubList;
