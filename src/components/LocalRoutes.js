import { Routes, Route } from "react-router-dom";
import SongList from "./SongList";
import AddSong from "./AddSong";
import Statistics from "./Statistics";

const LocalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SongList />} />
      <Route path="/addnewsong" element={<AddSong />} />
      <Route path="/statistics" element={<Statistics />} />
    </Routes>
  );
};
export default LocalRoutes;
