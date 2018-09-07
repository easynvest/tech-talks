import React from 'react';
import styled from 'react-emotion';
import PlayIcon from '../../assets/img/player.svg';

const Wrapper = styled('section')``;

const Link = styled('a')``;

const VideosWrapper = styled('section')`
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

const Video = styled('div')`
  position: relative;
  padding: 10px;
  margin: 10px 8px;
  cursor: pointer;
  background: white;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 40px;
    background-image: url(${PlayIcon});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: rgba(255,255,255,0.7);
  }
`;

const VideoImage = styled('img')`
`;

const VideosList = ({ data }) => (
  <Wrapper>
    <Title>Youtube</Title>
    <VideosWrapper>
      {data.map(v => (
        <Link
          target="_blank"
          key={v.id}
          href={`https://youtube.com/watch?v=${v.id}`}
        >
          <Video>
            <VideoImage
              width={280}
              alt={v.title}
              src={`https://img.youtube.com/vi/${v.id}/0.jpg`}
            />
          </Video>
        </Link>
      ))}
    </VideosWrapper>
  </Wrapper>
);

export default VideosList;
