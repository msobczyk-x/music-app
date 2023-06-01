import React, { useCallback, useEffect, useState } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { RxSpeakerLoud, RxSpeakerOff } from "react-icons/rx";
import {BsShuffle, BsArrowRepeat} from 'react-icons/bs'
import fmtMSS from "@/utils/timeUtil";

type PlayerBarProps = {
  token: string | null;
  player: Spotify.Player | undefined;
};



const PlayerBar = ({ token, player }: PlayerBarProps) => {

  const [current_track, setTrack] = useState<Spotify.Track | null>(null);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [volumeShown, setVolumeShown] = useState(false);

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
    <div className={"h-24 flex flex-row items-center justify-between fixed bottom-0 p-5 border-t-2 z-10 border-zinc-700 bg-zinc-800 w-full "}>
      {current_track ?  
        <div className="flex flex-row items-center justify-center w-min-[100px] w-max-[200px]">
          <img
            className="h-16 w-16 rounded min-w-[64px]"
            src={current_track.album.images[0].url}
          />
          <div className="hidden sm:flex flex-col items-start justify-center ml-4 ">
            <p className="text-white">{current_track.name}</p>
            <p className="text-slate-400 text-xs">{current_track.artists[0].name}</p>
          </div>
        </div>
        : <div className="flex flex-row items-center justify-center w-min-[100px] w-max-[200px]">
          <div
            className="h-16 w-16 rounded min-w-[64px] bg-slate-800"
    
          >
            </div>
          <div className="hidden sm:flex flex-col items-start justify-center ml-4">
            <p className="text-white">No song playing</p>
            <p className="text-slate-400 text-xs">No artist</p>
          </div>
        </div>

}
 

      <div className="flex flex-col items-center justify-center w-min-[350px]">
        <div className="buttons flex flex-row items-center justify-center gap-4">
          <button className="text-white">
            {<BsShuffle className="h-4 w-4 hover:text-yellow-400" />}
          </button>
          <button
            className="text-white"
            onClick={() => {
              console.log(player);
              player?.previousTrack();
            }}
          >
            {<GiPreviousButton className="h-5 w-5 hover:text-yellow-400 hover:scale-110" />}
          </button>
          <button className="text-white" onClick={() => player?.togglePlay()}>
            {isPlaying ? (
              <AiFillPauseCircle className="h-10 w-10 hover:text-yellow-400 hover:scale-110" />
            ) : (
              <AiFillPlayCircle className="h-10 w-10 hover:text-yellow-400 hover:scale-110" />
            )}
          </button>
          <button className="text-white" onClick={() => player?.nextTrack()}>
            {<GiNextButton className="h-5 w-5 hover:text-yellow-400 hover:scale-110" />}
          </button>
          <button className="text-white"
          >
            {<BsArrowRepeat className="h-4 w-4 hover:text-yellow-400" />}
          </button>
        </div>
        <div className="progress-bar flex flex-row items-center justify-center">
          <p className="text-white pr-2">
            {fmtMSS(Math.trunc(progress/1000))}
          </p>
          <p className="text-white">
            <input type="range" className="sm:w-64 md:w-96 h-1 accent-yellow-400 mb-3 range" min="0" max={duration} onChange={e=> {
              player?.seek(parseInt(e.target.value))
            }
            } value={progress} />

          </p>
          <p className="text-white pl-2">
           {fmtMSS(Math.trunc(duration/1000))}
          </p>
        </div>
      </div>
      <div className="speaker flex flex-row items-center justify-center ml-4">
        <p className="text-white sm: mr-2" onClick={()=> setVolumeShown(prev => !prev)}>
          {isMuted ? <RxSpeakerOff className="h-4 w-4 hover:text-yellow-400"/> : <RxSpeakerLoud className="h-4 w-4 hover:text-yellow-400" /> }

        </p>
        <input
          className={`sm:block sm:static sm:transform-none text-white h-1 accent-yellow-400 range ${volumeShown ? `transform rotate-[270deg] absolute bottom-32 border-amber-500` : `hidden`} `}
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
