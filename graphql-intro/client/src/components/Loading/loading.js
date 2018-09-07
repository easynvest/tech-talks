import React from 'react';
import styled from 'react-emotion';
import LoadingGIF from '../../assets/img/loading.svg';

const LoadingWrapper = styled('section')`
  display: flex;
  justify-content: center;
  height: calc(100vh - 170px);
`;

const LoadingStyled = styled('img')``;

const Loading = () => (
  <LoadingWrapper>
    <LoadingStyled
      src={LoadingGIF}
      width={100}
    />
  </LoadingWrapper>
);

export default Loading;
