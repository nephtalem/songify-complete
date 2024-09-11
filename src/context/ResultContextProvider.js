import React, { createContext, useContext, useEffect, useState } from "react";
import songServices from "../services/songServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongsRequest } from "../Redux/actions/songAction";

const ResultContext = createContext();

export const ResultContextProvider = ({ children }) => {
  const [songResults, setSongResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  // State variables for statistics
  const [statistics, setStatistics] = useState({
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
    songsByGenre: [],
    songsAndAlbumsByArtist: [],
    uniqueAlbumCount: 0, // Updated to reflect unique album count
  });
  const [statsLoading, setStatsLoading] = useState(true);
  const [statsError, setStatsError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // getResults();
    // getStatistics(); // Fetch statistics on initial load
  }, []);

  const getResults = async () => {
    // try {
    //   const result = await songServices.getSong();
    //   setSongResults(result.docs);
    //   setGenres(result.Genres);
    //   setIsLoading(false);
    // } catch (err) {
    //   console.log(err);
    //   setIsLoading(false);
    // }
  };

  const getStatistics = async () => {
    // try {
    //   const result = await songServices.getStatistics(); // Fetch statistics
    //   // Update state with uniqueAlbumCount
    //   setStatistics({
    //     ...result,
    //     uniqueAlbumCount: result.uniqueAlbumCount, // Ensure unique album count is set
    //   });
    //   setStatsLoading(false);
    // } catch (err) {
    //   console.log(err);
    //   setStatsError(err);
    //   setStatsLoading(false);
    // }
  };

  // const handleNewSongSubmit = async (e) => {
  //   e.preventDefault();
  //   const song = {
  //     Title: newSong.Title,
  //     Genre: newSong.Genre,
  //     Album: newSong.Album,
  //     Artist: newSong.Artist,
  //   };

  //   try {
  //     const result = await songServices.addSong(song);
  //     getResults();
  //     toast.success("Song added successfully");
  //     navigate("/");
  //   } catch (error) {
  //     console.error("Error adding song:", error);
  //     toast.error("Failed to add song.");
  //   }

  //   setNewSong({
  //     Title: "",
  //     Artist: "",
  //     Album: "",
  //     Genre: "",
  //   });
  // };

  const handleDelete = async (id) => {
    // try {
    //   const result = await songServices.deleteSong(id);
    //   getResults();
    //   dispatch(fetchSongsRequest());
    //   toast.success("Song deleted successfully.");
    //   navigate("/");
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Error while deleting.");
    // }
  };

  const handleUpdate = async (e, id) => {
    // e.preventDefault();
    // const song = {
    //   Title: e.target.elements.title.value,
    //   Artist: e.target.elements.artist.value,
    //   Album: e.target.elements.album.value,
    //   Genre: e.target.elements.genre.value,
    // };

    // try {
    //   const result = await songServices.updateSong(id, song);
    //   getResults();
    //   toast.success("Song updated successfully");
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Failed to update");
    // }
  };

  return (
    <ResultContext.Provider
      value={{
        isLoading,
        songResults,
        handleDelete,
        handleUpdate,
        statistics,
        statsLoading,
        statsError,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContexts = () => useContext(ResultContext);
