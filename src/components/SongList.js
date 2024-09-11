import Song from "./Song";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSongsRequest } from "../Redux/actions/songAction";

const SongList = () => {
  const dispatch = useDispatch();
  const songResults = useSelector((state) => state.songReducer.songs);

  useEffect(() => {
    dispatch(fetchSongsRequest()); // Correctly call and dispatch the action
  }, [dispatch]);

  console.log(songResults.length);
  return (
    <div className="w-full h-full grid gap-4 p-4  max-md:grid-cols-1 lg:grid-cols-2 ">
      {songResults.length === 0 ? (
        <div className="w-full h-full text-center"> 
          <h1 className="font-bold text-3xl">Please Add Songs</h1>
        </div>
      ) : (
        songResults.map((song) => <Song key={song._id} {...song} />)
      )}
    </div>
  );
};
export default SongList;
