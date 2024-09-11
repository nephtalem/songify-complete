/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { addSongRequest } from "../Redux/actions/songAddAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

const formStyle = css`
  padding: 1.5rem;
  max-width: 600px; /* Set a maximum width for better control */
  margin: auto; /* Center the form horizontally */
  border: 2px solid #e2e8f0; /* Light border for a soft look */
  border-radius: 0.5rem; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  background-color: #ffffff; /* White background for contrast */
`;

const fieldStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* Space between label and input */
`;

const labelStyle = css`
  font-weight: 600;
  color: #4a5568; /* Darker text color for better readability */
`;

const inputStyle = css`
  border: 1px solid #d1d5db; /* Slightly darker border */
  border-radius: 0.375rem; /* Consistent rounding */
  width: 100%; /* Full width to fit the container */
  padding: 0.5rem; /* Add padding for better spacing */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05); /* Subtle inner shadow */
`;

const selectStyle = css`
  border: 1px solid #d1d5db; /* Slightly darker border */
  border-radius: 0.375rem; /* Consistent rounding */
  width: 100%; /* Full width to fit the container */
  padding: 0.5rem; /* Add padding for better spacing */
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05); /* Subtle inner shadow */
`;

const buttonStyle = css`
  padding: 0.75rem;
  font-weight: 700;
  background-color: #ef4444; /* Red 400 */
  color: #ffffff;
  border: none; /* Remove default border */
  border-radius: 0.375rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%; /* Full width button */
  margin-top: 1rem; /* Space above the button */
  cursor: pointer;
  &:hover {
    background-color: #dc2626; /* Red 800 */
    transform: scale(1.02); /* Slight scaling on hover */
  }
`;

const AddSong = () => {
  const [newSong, setNewSong] = useState({
    Title: "",
    Artist: "",
    Album: "",
    Genre: "",
  });
  const { Title, Artist, Album, Genre } = newSong;

  const result = useSelector((state) => state);
  console.log(result);

  const dispatch = useDispatch();

  const genres = ["HipHop", "Pop", "Country", "Reggae", "AfroBeats"];
  const navigate = useNavigate();

  const handleSongSubmit = (e) => {
    e.preventDefault();
    const song = {
      Title: e.target.title.value,
      Genre: e.target.genre.value,
      Album: e.target.album.value,
      Artist: e.target.artist.value,
    };
    dispatch(addSongRequest(song));
    toast.success("Song added successfully.");
    navigate("/");
  };

  return (
    <form css={formStyle} onSubmit={handleSongSubmit}>
      <div css={fieldStyle}>
        <label htmlFor="title" css={labelStyle}>
          Title
        </label>
        <input
          type="text"
          id="title"
          css={inputStyle}
          name="title"
          value={Title}
          onChange={(e) => setNewSong({ ...newSong, Title: e.target.value })}
          required
        />
      </div>
      <div css={fieldStyle}>
        <label htmlFor="artist" css={labelStyle}>
          Artist
        </label>
        <input
          type="text"
          id="artist"
          css={inputStyle}
          value={Artist}
          onChange={(e) => setNewSong({ ...newSong, Artist: e.target.value })}
          required
        />
      </div>
      <div css={fieldStyle}>
        <label htmlFor="album" css={labelStyle}>
          Album
        </label>
        <input
          type="text"
          id="album"
          css={inputStyle}
          value={Album}
          onChange={(e) => setNewSong({ ...newSong, Album: e.target.value })}
          required
        />
      </div>
      <div css={fieldStyle}>
        <label htmlFor="genre" css={labelStyle}>
          Genre
        </label>
        <select
          id="genre"
          css={selectStyle}
          value={Genre}
          onChange={(e) => setNewSong({ ...newSong, Genre: e.target.value })}
          required
        >
          <option value="">--Select Genre--</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" css={buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default AddSong;
