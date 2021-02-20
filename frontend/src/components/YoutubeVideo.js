import React from "react";
import YouTube from "react-youtube";

export default function YoutubeVideo(props) {
  const opts = {
    height: "238",
    width: "422",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId={props.videoId} opts={opts} onReady={_onReady} />
    </div>
  );
}
