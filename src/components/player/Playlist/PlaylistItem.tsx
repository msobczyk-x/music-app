import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import PlayButton from "@components/player/PlayButton";
import fmtMSS from "@/utils/timeUtil";
const PlaylistItem = ({ track, index }: any) => {
  return (
    <>
      <td className="pr-2">{index}</td>
      <td >
        <div className="flex flex-row items-center gap-5 ">
            <img src={track.album.images[2].url} alt="" className="w-10 h-10 mr-2"/>
            <p className="max-w-sm">
            {track.name}{" "}
            </p>
          
          <PlayButton uris={track.uri} text={<BsFillPlayFill className="" />} />
        </div>
      </td>

      <td className="flex items-center">
        <NavLink
          to={`/player/artist/${track.artists[0].id}`}
          className="flex flex-row items-center justify-start w-full text-zinc-400 truncate mt-2 text-sm"
        >
          {track.artists[0].name}
        </NavLink>
      </td>
      <td>
        {
            fmtMSS((Math.trunc(track.duration_ms/1000)))
        }
      </td>
    </>
  );
};

export default PlaylistItem;
