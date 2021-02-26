import React from "react";
// @ts-ignore
import hereBecause from "../songs/here-because.mp3";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { FaStop } from "@react-icons/all-files/fa/FaStop";
import useSound from "use-sound";
import { Fade } from "react-awesome-reveal";
import { css } from "linaria";

interface FadeTextProps {
  isVisible: boolean;
  text: string;
}

const playText = css`
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-size: 19px;
`;

const FadeText: React.FC<FadeTextProps> = ({ isVisible, text }) => {
  return isVisible ? (
    <Fade>
      <p className={playText}>{text}</p>
    </Fade>
  ) : null;
};

interface PlayControlProps {
  togglePlaying: () => void;
  isPlaying: boolean;
}

const playIcon = css`
  color: white;
  padding: 10px;
  cursor: pointer;
  font-size: 25px;
  border: 2px solid;
  border-radius: 10px;
  @media only screen and (max-width: 450px) {
    font-size: 20px;
  }
`;

const PlayIcon: React.FC<PlayControlProps> = ({ isPlaying, togglePlaying }) => {
  return isPlaying ? (
    <FaStop onClick={togglePlaying} className={playIcon} data-testid="toggle" />
  ) : (
    <FaPlay onClick={togglePlaying} className={playIcon} data-testid="toggle" />
  );
};

const playContainer = css`
  display: flex;
  align-items: center;
`;

const playTextContainer = css`
  display: flex;
  width: 60px;
`;

export const PlayControls: React.FC<PlayControlProps> = (props) => {
  const { isPlaying, togglePlaying } = props;
  return (
    <div className={playContainer}>
      <PlayIcon isPlaying={isPlaying} togglePlaying={togglePlaying} />
      <div className={playTextContainer}>
        <FadeText isVisible={!isPlaying} text="Play" />
        <FadeText isVisible={isPlaying} text="Stop" />
      </div>
    </div>
  );
};

const PlayButton: React.FC = () => {
  const [play, { stop, isPlaying }] = useSound(hereBecause);
  const togglePlaying = React.useCallback(() => (isPlaying ? stop() : play()), [
    play,
    stop,
    isPlaying,
  ]);
  return <PlayControls isPlaying={isPlaying} togglePlaying={togglePlaying} />;
};

export default PlayButton;
