import { DELETE_SONG_REQUEST } from "../../constants";


export const deleteSongRequest = (id) => {
    console.log("delete action called")
    return{
        type: DELETE_SONG_REQUEST,
        payload:id
    }
}
export const deleteSongFailure = (error) => {
    return{
        type: DELETE_SONG_REQUEST,
        payload:error
    }
}