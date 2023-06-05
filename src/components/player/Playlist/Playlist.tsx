import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import PlayButton from "../PlayButton";
import { BsFillPlayFill } from "react-icons/bs";
import PlaylistItem from "./PlaylistItem";
import { FiClock } from "react-icons/fi";
const Playlist = ({ playlistId }: any) => {
  const params = useParams();
  const [playlistItems, setPlaylistItems] = React.useState<any>([]);
  const [playlistInfo, setPlaylistInfo] = React.useState<any>([]);
  const [isLoadingItems, setIsLoadingItems] = React.useState(true);
  const [isLoadingInfo, setIsLoadingInfo] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [isCopied, setIsCopied] = React.useState(false); 
  const [selectedGenre, setSelectedGenre] = React.useState(""); 

  const fetchPlaylistInfo = async () => {
    try {
      const response1 = await fetch(
        `https://api.spotify.com/v1/playlists/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response1.json();
      console.log(data);
      setPlaylistInfo(data);
      console.log(playlistInfo);
      setIsLoadingInfo(false);
    } catch (error) {
      setError(true);
    }
  };

  const fetchPlaylist = async () => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${params.id}/tracks`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      console.log(data);

      setPlaylistItems(data.items);
      console.log(playlistItems);
      setIsLoadingItems(false);
    } catch (error) {
      setError(true);
    }
  };

  React.useEffect(() => {
    fetchPlaylistInfo();
    console.log(playlistInfo.uri);
  }, [params]);

  React.useEffect(() => {
    fetchPlaylist();
  }, [params]);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(playlistInfo.external_urls.spotify); // Copy the playlist URL to the clipboard
    setIsCopied(true); // Update the state to indicate that the URL has been copied
    setTimeout(() => setIsCopied(false), 2000); // Reset the state after 2 seconds
  };

  

  return (
    <div className="w-full flex flex-col">
      {!isLoadingInfo && !isLoadingItems ? (
        <>
          <header>
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center">
                <img
                  src={playlistInfo?.images[0].url}
                  alt=""
                  className="w-20 h-20"
                />
                <div className="flex flex-col ml-4">
                  <h1 className="text-2xl font-bold">{playlistInfo?.name}</h1>
                  <h2 className="text-lg">{playlistInfo.owner.display_name}</h2>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <button
                  type="button"
                  className="px-4 py-2 text-sm font-medium text-white bg-yellow-700 rounded-lg border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                  onClick={handleCopyUrl} // Call the handleCopyUrl function when the button is clicked
                >
                  {isCopied ? "Copied!" : "Share"}
                </button>
                <PlayButton
                  contextUri={playlistInfo.uri}
                  text={<BsFillPlayFill />}
                  bgColor={true}
                />
              </div>
            </div>
          </header>

          <table className="table-auto border-separate border-spacing-y-4 w-full mb-24">
            <thead>
              <tr>
                <th className="text-left">#</th>
                <th className="text-left">Title</th>
                <th className="text-left">Artist</th>
                <th className="text-left">
                  <FiClock />
                </th>
              </tr>
            </thead>
            <tbody>
              {playlistItems.map((el: any, index: number) => {
                return (
                  <tr key={index} className="">
                    <PlaylistItem
                      key={index}
                      track={el.track}
                      index={index}
                      playlistId={playlistInfo.id}
                    />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <div>Loading ....</div>
      )}
    </div>
  );
};

export default Playlist;
