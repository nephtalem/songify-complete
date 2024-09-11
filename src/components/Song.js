import { useState } from "react";
import ConfirmationModal from "./ConfirmationModal";
import { useDispatch } from "react-redux";
import { deleteSongRequest } from "../Redux/actions/songDelete";
import { updateSongRequest } from "../Redux/actions/songUpdateAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Song = ({ Album, Artist, Genre, Title, _id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [editSong, setEditSong] = useState({
    title: Title,
    genre: Genre,
    artist: Artist,
    album: Album,
  });

  const genres = ["HipHop", "Pop", "Country", "Reggae", "AfroBeats"];
  const dispatch = useDispatch();

  const { title, genre, artist, album } = editSong;

  const confirmDelete = () => {
    dispatch(deleteSongRequest(_id));
    // handleDelete(_id);
    setShowModal(false);
  };

  const handleSongUpdate = (e, _id) => {
    e.preventDefault();
    const song = {
      Title: e.target.elements.title.value,
      Artist: e.target.elements.artist.value,
      Album: e.target.elements.album.value,
      Genre: e.target.elements.genre.value,
    };

    dispatch(updateSongRequest(_id, song));
    toast.success("Song updated successfully");
  };

  return (
    <div className="p-4 shadow-md rounded-lg max-sm:max-w-72 sm:w-3/4 border-2 max-h-80">
      {isEditing ? (
        <form onSubmit={(e) => (handleSongUpdate(e, _id), setIsEditing(false))}>
          {/* Form fields and buttons */}
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="border-2 rounded-lg w-3/4 py-1 px-1 shadow-sm"
              name="title"
              required
              value={title}
              onChange={(e) =>
                setEditSong({ ...editSong, title: e.target.value })
              }
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              id="artist"
              name="artist"
              className="border-2 rounded-lg w-3/4 py-1 px-1 shadow-sm"
              onChange={(e) =>
                setEditSong({ ...editSong, artist: e.target.value })
              }
              value={artist}
              required
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="album">Album</label>
            <input
              type="text"
              id="album"
              name="album"
              className="border-2 rounded-lg w-3/4 py-1 px-1 shadow-sm"
              onChange={(e) =>
                setEditSong({ ...editSong, album: e.target.value })
              }
              value={album}
              required
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <label htmlFor="genre">Genre</label>
            <select
              id="genre"
              name="genre"
              className="border-2 rounded-lg w-3/4 py-1 px-1 shadow-sm"
              value={genre}
              required
              onChange={(e) =>
                setEditSong({ ...editSong, genre: e.target.value })
              }
            >
              <option value="">--Select Genre--</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-around mt-2">
            <button
              type="submit"
              className="p-2 font-bold w-28 bg-red-400 text-white rounded-md hover:bg-red-800 transition-colors duration-300"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="p-2 w-28 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-800 transition-colors duration-300"
            >
              Back
            </button>
          </div>
        </form>
      ) : (
        <div>
          <div className="text-lg">
            Song Title: <span className="font-bold ml-2">{Title}</span>
          </div>
          <div className="text-lg">
            Artist: <span className="font-bold ml-2">{Artist}</span>
          </div>
          <div className="text-lg">
            Genre: <span className="font-bold ml-2">{Genre}</span>
          </div>
          <div className="text-lg">
            Album: <span className="font-bold ml-2">{Album}</span>
          </div>
          <div className="flex justify-around mt-2">
            <button
              onClick={() => setShowModal(true)}
              className="p-2 font-bold w-28 bg-red-400 text-white rounded-md hover:bg-red-800 transition-colors duration-300"
            >
              Delete
            </button>
            <button
              onClick={() => setIsEditing(true)}
              className="p-2 w-28 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-800 transition-colors duration-300"
            >
              Edit
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <ConfirmationModal
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Song;
