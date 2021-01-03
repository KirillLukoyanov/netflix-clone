import React from "react";
import { Container, Button, Overlay, Inner, Close } from "./styles/player";
import ReactDOM from "react-dom";
export const PlayerContext = React.createContext();

function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = React.useState(false);
  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = React.useContext(PlayerContext);
  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay {...restProps} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <source src={src} type="videp/mp4" />
            </video>
            <Close onClick={() => setShowPlayer((current) => !current)} />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = React.useContext(PlayerContext);
  return (
    <Button
      {...restProps}
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
    >
      Play
    </Button>
  );
};

export default Player;
