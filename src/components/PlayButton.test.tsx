import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PlayControls } from "./PlayButton";

describe("Our play button", () => {
  test("Says play when nothing is playing", () => {
    const { getByText } = render(
      <PlayControls isPlaying={false} togglePlaying={() => {}} />
    );
    expect(getByText("Play")).toBeInTheDocument();
  });
  test("Says stop when something is playing", () => {
    const { getByText } = render(
      <PlayControls isPlaying togglePlaying={() => {}} />
    );
    expect(getByText("Stop")).toBeInTheDocument();
  });
  test("Clicking can change the play controls", () => {
    const ToggleChangeCheck = () => {
      const [isPlaying, setIsPlaying] = React.useState(false);
      const togglePlaying = React.useCallback(() => {
        setIsPlaying(!isPlaying);
      }, [isPlaying]);
      return (
        <PlayControls isPlaying={isPlaying} togglePlaying={togglePlaying} />
      );
    };
    const { getByTestId, queryByText, getByText } = render(
      <ToggleChangeCheck />
    );
    expect(getByText("Play")).toBeInTheDocument();
    const toggler = getByTestId("toggle");
    fireEvent.click(toggler);
    expect(queryByText("Play")).not.toBeInTheDocument();
    expect(getByText("Stop")).toBeInTheDocument();
  });
});
