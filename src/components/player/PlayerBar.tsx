import React, { useCallback, useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { RxSpeakerLoud } from "react-icons/rx";
type PlayerBarProps = {
  token: string | null;
  player: Spotify.Player | undefined;
};

const PlayerBar = ({ token, player }: PlayerBarProps) => {
  const [current_track, setTrack] = useState<Spotify.Track | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (player) {
      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        setTrack(state.track_window.current_track);
        setIsPlaying(!state.paused);
        setIsPaused(state.paused);
        setProgress(state.position);

        setDuration(state.track_window.current_track.duration_ms);
      });
    }
  }, [player]);

  useEffect(() => {
    if (isPlaying) {
      let progressInterval = setInterval(() => {
        setProgress((progress) => progress + 1000);
      }, 1000);
      return () => clearInterval(progressInterval);
    }
  }, [isPlaying]);

  return (
    <div className="h-24 flex flex-row items-center justify-between fixed bottom-0 w-screen p-5 border-t-2 border-zinc-600">
      {current_track && (
        <div className="flex flex-row items-center justify-center w-min-[100px] w-max-[200px]">
          <img
            className="h-16 w-16 rounded-full min-w-[64px]"
            src={current_track.album.images[0].url}
          />
          <div className="hidden sm:flex flex-col items-center justify-center ml-4">
            <p className="text-white">{current_track.name}</p>
            <p className="text-white">{current_track.artists[0].name}</p>
          </div>
        </div>
      )}

      <div className="flex flex-col items-center justify-center w-min-[350px]">
        <div className="buttons flex flex-row items-center justify-center">
          <button
            className="text-white"
            onClick={() => {
              console.log(player);
              player?.previousTrack();
            }}
          >
            {<GiPreviousButton style={{ height: "1.5rem", width: "1.5rem" }} />}
          </button>
          <button className="text-white" onClick={() => player?.togglePlay()}>
            {isPlaying ? (
              <AiFillPauseCircle style={{ height: "3rem", width: "3rem" }} />
            ) : (
              <AiFillPlayCircle style={{ height: "3rem", width: "3rem" }} />
            )}
          </button>
          <button className="text-white" onClick={() => player?.nextTrack()}>
            {<GiNextButton style={{ height: "1.5rem", width: "1.5rem" }} />}
          </button>
        </div>
        <div className="progress-bar flex flex-row items-center justify-center">
          <p className="text-white pr-2">
            {Math.floor(progress / 60000)}:
            {Math.floor((progress % 60000) / 1000)}
          </p>
          <p className="text-white">
            <input type="range" min="0" max={duration} onChange={e=> {
              player?.seek(parseInt(e.target.value))
            }
            } value={progress} />

          </p>
          <p className="text-white pl-2">
            {Math.floor(duration / 60000)}:
            {Math.floor((duration % 60000) / 1000)}
          </p>
        </div>
      </div>
      <div className="speaker flex flex-row items-center justify-center ml-4">
        <p className="text-white">
          <RxSpeakerLoud style={{ height: "1.5rem", width: "1.5rem" }} />
        </p>
        <input
          className="text-white"
          type="range"
          min="0"
          max="100"
          onChange={(e) => player?.setVolume(parseInt(e.target.value) / 100)}
        />
      </div>
    </div>
  );
};

export default PlayerBar;
