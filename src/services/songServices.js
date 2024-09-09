// src/services/songServices.js
import axios from "axios";

const API_URL = "http://localhost:8800/api/songs";

const getSong = async () => {
  const response = await axios.get(`${API_URL}/getSongs`);
  return response.data;
};

const addSong = async (song) => {
  const response = await axios.post(`${API_URL}/addSong`, song);
  return response.data;
};

const deleteSong = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/${id}`);
  return response.data;
};

const updateSong = async (id, song) => {
  const response = await axios.put(`${API_URL}/edit/${id}`, song);
  return response.data;
};

const getStatistics = async () => {
  const response = await axios.get(`${API_URL}/overallStatistics`);
  return response.data;
};

export default {
  getSong,
  addSong,
  deleteSong,
  updateSong,
  getStatistics, // Export the new method
};
