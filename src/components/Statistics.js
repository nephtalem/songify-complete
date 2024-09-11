/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect } from "react";
import { Bar, Pie, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatisticsRequest } from "../Redux/actions/songStatisticsAction";

// Registering Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const containerStyle = css`
  max-width: 1200px; /* Adjust max width as needed */
  margin: auto;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

const titleStyle = css`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #4a5568;
`;

const sectionStyle = css`
  margin-bottom: 2.5rem;
`;

const headerStyle = css`
  font-size: 1.75rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1rem;
`;

const listStyle = css`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 0.375rem;
  background-color: #f7fafc;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const itemStyle = css`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid #e2e8f0;

  &:last-child {
    border-bottom: none;
  }
`;

const chartContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%; /* Ensure charts are responsive */
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const chartStyle = css`
  width: 100%;
  max-width: 500px; /* Adjust as needed */
  margin: 1rem;
`;

const loadingStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const errorStyle = css`
  color: #f56565;
  text-align: center;
`;

const Statistics = () => {
  const dispatch = useDispatch();
  const result = useSelector (state => state.songStatistics)
  const {loading, error, statistics} = result


  console.log(statistics)

  useEffect(() => {
    dispatch(fetchStatisticsRequest())
  }, [dispatch]);

  if (loading)
    return (
      <div css={loadingStyle}>
        <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>
    );
  if (error)
    return (
      <div css={errorStyle}>Error loading statistics: {error.message}</div>
    );

  // Prepare chart data with distinct colors
  const genreData = {
    labels: statistics.songsByGenre.map((item) => item._id),
    datasets: [
      {
        label: "Songs by Genre",
        data: statistics.songsByGenre.map((item) => item.count),
        backgroundColor: statistics.songsByGenre.map(
          (_, index) => `hsl(${index * 40}, 70%, 70%)`
        ),
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
      },
    ],
  };

  const artistData = {
    labels: statistics.songsAndAlbumsByArtist.map((item) => item._id),
    datasets: [
      {
        label: "Songs per Artist",
        data: statistics.songsAndAlbumsByArtist.map((item) => item.songCount),
        backgroundColor: statistics.songsAndAlbumsByArtist.map(
          (_, index) => `hsl(${index * 60}, 70%, 70%)`
        ),
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
      },
      {
        label: "Albums per Artist",
        data: statistics.songsAndAlbumsByArtist.map((item) => item.albumCount),
        backgroundColor: statistics.songsAndAlbumsByArtist.map(
          (_, index) => `hsl(${index * 60 + 30}, 70%, 70%)`
        ),
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
      },
    ],
  };

  const albumData = {
    labels: statistics.songsByAlbum.map((item) => item._id),
    datasets: [
      {
        label: "Songs by Album",
        data: statistics.songsByAlbum.map((item) => item.count),
        backgroundColor: statistics.songsByAlbum.map(
          (_, index) => `hsl(${index * 30}, 70%, 70%)`
        ),
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>Statistics</h1>

      {/* Total Overview */}
      <div css={sectionStyle}>
        <h2 css={headerStyle}>Total Overview</h2>
        <div css={listStyle}>
          <div css={itemStyle}>
            <span>Total Songs:</span>
            <span>{statistics.totalSongs || 0}</span>
          </div>
          <div css={itemStyle}>
            <span>Total Artists:</span>
            <span>{statistics.totalArtists || 0}</span>
          </div>
          <div css={itemStyle}>
            <span>Total Albums:</span>
            <span>{statistics.totalAlbums || 0}</span>
          </div>
          <div css={itemStyle}>
            <span>Total Genres:</span>
            <span>{statistics.totalGenres || 0}</span>
          </div>
        </div>
      </div>

      {/* Songs by Genre */}
      <div css={sectionStyle}>
        <h3 css={headerStyle}>Songs by Genre</h3>
        <div css={chartContainerStyle}>
          <div css={chartStyle}>
            <Pie
              data={genreData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  title: { display: true, text: "Songs by Genre" },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Songs and Albums by Artist */}
      <div css={sectionStyle}>
        <h3 css={headerStyle}>Songs and Albums by Artist</h3>
        <div css={chartContainerStyle}>
          <div css={chartStyle}>
            <Bar
              data={artistData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  title: { display: true, text: "Songs and Albums by Artist" },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* Songs by Album */}
      <div css={sectionStyle}>
        <h3 css={headerStyle}>Songs by Album</h3>
        <div css={chartContainerStyle}>
          <div css={chartStyle}>
            <Doughnut
              data={albumData}
              options={{
                responsive: true,
                plugins: {
                  legend: { position: "top" },
                  title: { display: true, text: "Songs by Album" },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
