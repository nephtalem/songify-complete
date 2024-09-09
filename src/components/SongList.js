import Song from "./Song";
import { useResultContexts } from "../context/ResultContextProvider";

const SongList = () => {
  const { songResults } = useResultContexts();

  return (
    <div className="w-full h-full grid gap-4 p-4  max-md:grid-cols-1 lg:grid-cols-2 ">
      {songResults.map((song) => (
        <Song key={song._id} {...song} />
      ))}
    </div>
  );
};
export default SongList;
