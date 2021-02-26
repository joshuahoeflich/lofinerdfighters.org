import React from "react";
// @ts-ignore
import hereBecause from "../songs/here-because.mp3";
import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
import { FaStop } from "@react-icons/all-files/fa/FaStop";
import useSound from "use-sound";
import { Flex, Text, Icon, Fade } from "@chakra-ui/react";

interface FadeTextProps {
  isIn: boolean;
  text: string;
}

const FadeText: React.FC<FadeTextProps> = ({ isIn, text }) => {
  if (!isIn) return null;
  return (
    <Fade in={isIn}>
      <Text px="10px" my="0" color="white" fontSize="19px">
        {text}
      </Text>
    </Fade>
  );
};

interface PlayControlProps {
  togglePlaying: () => void;
  isPlaying: boolean;
}

export const PlayControls: React.FC<PlayControlProps> = (props) => {
  const { isPlaying, togglePlaying } = props;
  return (
    <Flex alignItems="center">
      <Icon
        as={isPlaying ? FaStop : FaPlay}
        color="white"
        p="10px"
        cursor="pointer"
        fontSize="45px"
        border="2px solid"
        borderRadius="10px"
        data-testid="toggle"
        onClick={togglePlaying}
      />
      <Flex width="10px">
        <FadeText isIn={!isPlaying} text="Play" />
        <FadeText isIn={isPlaying} text="Stop" />
      </Flex>
    </Flex>
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
