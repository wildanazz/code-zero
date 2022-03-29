import { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import music from './audio/samui-sunrise.wav';

interface SoundbarProps {
  isActivated: boolean;
}

const StyledSoundBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 36px;
  bottom: 36px;
  z-index: 3;
  cursor: pointer;

  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;

const play = keyframes`
0%{
    transform:scaleY(1);
}
50%{
    transform:scaleY(2);
}
100%{
    transform:scaleY(1);
}`;

const Line = styled.span<SoundbarProps>`
  background: #ffcb74;
  border: 1px solid rgba(47, 47, 47, 1);
  animation: ${play} 1s ease infinite;
  animation-play-state: ${({ isActivated }) =>
    isActivated ? 'running' : 'paused'};
  height: 1rem;
  width: 2px;
  margin: 0 0.1rem;
`;

function SoundBar(): JSX.Element {
  const ref = useRef<HTMLAudioElement>(null);
  const [isActivated, setIsActivated] = useState(false);

  const handleClick = (): void => {
    setIsActivated(!isActivated);

    if (ref.current !== null) {
      if (!isActivated) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  };

  return (
    <StyledSoundBar onClick={() => handleClick()}>
      <Line isActivated={isActivated} />
      <Line isActivated={isActivated} />
      <Line isActivated={isActivated} />
      <Line isActivated={isActivated} />
      <Line isActivated={isActivated} />
      <audio src={music} ref={ref} loop>
        <track kind="captions" />
      </audio>
    </StyledSoundBar>
  );
}

export default SoundBar;
