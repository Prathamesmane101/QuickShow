// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const BookingPage = () => {
//   const { movieId } = useParams(); // Get movieId from URL
//   const [selectedDate, setSelectedDate] = useState("2025-08-10");
//   const [show, setShow] = useState(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchShow = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/show/showsByDate/${movieId}`, {
//           params: { date: selectedDate }
//         });
//         setShow(response.data);
//         setError("");
//       } catch (err) {
//         console.error("Error fetching show:", err);
//         if (err.response) {
//           setError(err.response.data);
//         } else {
//           setError("Network error. Is your backend running?");
//         }
//         setShow(null);
//       }
//     };

//     fetchShow();
//   }, [movieId, selectedDate]);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <h2>🎬 Show Details</h2>

//       <label htmlFor="date">Select Date:</label>
//       <input
//         type="date"
//         id="date"
//         value={selectedDate}
//         onChange={(e) => setSelectedDate(e.target.value)}
//         style={{ marginLeft: "1rem", padding: "0.5rem" }}
//       />

//       {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

//       {show ? (
//         <table style={{ marginTop: "2rem", width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={thStyle}>Movie</th>
//               <th style={thStyle}>Theater</th>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td style={tdStyle}>{show.movieName}</td>
//               <td style={tdStyle}>{show.theaterName}</td>
//               <td style={tdStyle}>{show.date}</td>
//               <td style={tdStyle}>{show.time}</td>
//             </tr>
//           </tbody>
//         </table>
//       ) : (
//         !error && <p style={{ marginTop: "2rem" }}>No show available for this movie on this date.</p>
//       )}
//     </div>
//   );
// };

// const thStyle = {
//   borderBottom: "2px solid #ccc",
//   padding: "0.5rem",
//   textAlign: "left"
// };

// const tdStyle = {
//   borderBottom: "1px solid #eee",
//   padding: "0.5rem"
// };

// export default BookingPage;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const BookingPage = () => {
//   const { movieId } = useParams();
//   const [selectedDate, setSelectedDate] = useState("2025-08-10");
//   const [shows, setShows] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchShows = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/show/showsByDate/${movieId}`, {
//           params: { date: selectedDate }
//         });
//         setShows(response.data);
//         setError("");
//       } catch (err) {
//         console.error("Error fetching shows:", err);
//         if (err.response) {
//           setError(err.response.data);
//         } else {
//           setError("Network error. Is your backend running?");
//         }
//         setShows([]);
//       }
//     };

//     fetchShows();
//   }, [movieId, selectedDate]);

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <h2>🎬 Available Shows</h2>

//       <label htmlFor="date">Select Date:</label>
//       <input
//         type="date"
//         id="date"
//         value={selectedDate}
//         onChange={(e) => setSelectedDate(e.target.value)}
//         style={{ marginLeft: "1rem", padding: "0.5rem" }}
//       />

//       {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

//       {shows.length > 0 ? (
//         <table style={{ marginTop: "2rem", width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={thStyle}>Movie</th>
//               <th style={thStyle}>Theater</th>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>Time</th>
//             </tr>
//           </thead>
//           <tbody>
//             {shows.map((show) => (
//               <tr key={show.showId}>
//                 <td style={tdStyle}>{show.movieName}</td>
//                 <td style={tdStyle}>{show.theaterName}</td>
//                 <td style={tdStyle}>{show.date}</td>
//                 <td style={tdStyle}>{show.time}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         !error && <p style={{ marginTop: "2rem" }}>No shows available for this movie on this date.</p>
//       )}
//     </div>
//   );
// };

// const thStyle = {
//   borderBottom: "2px solid #ccc",
//   padding: "0.5rem",
//   textAlign: "left"
// };

// const tdStyle = {
//   borderBottom: "1px solid #eee",
//   padding: "0.5rem"
// };

// export default BookingPage;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const BookingPage = () => {
//   const { movieId } = useParams();
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState("2025-08-10");
//   const [shows, setShows] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchShows = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/show/showsByDate/${movieId}`, {
//           params: { date: selectedDate }
//         });
//         setShows(response.data);
//         setError("");
//       } catch (err) {
//         console.error("Error fetching shows:", err);
//         if (err.response) {
//           setError(err.response.data);
//         } else {
//           setError("Network error. Is your backend running?");
//         }
//         setShows([]);
//       }
//     };

//     fetchShows();
//   }, [movieId, selectedDate]);

//   const handleBookNow = (showId) => {
//     navigate(`/seats/${showId}`);
//   };

//   return (
//     <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
//       <h2>🎬 Available Shows</h2>

//       <label htmlFor="date">Select Date:</label>
//       <input
//         type="date"
//         id="date"
//         value={selectedDate}
//         onChange={(e) => setSelectedDate(e.target.value)}
//         style={{ marginLeft: "1rem", padding: "0.5rem" }}
//       />

//       {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

//       {shows.length > 0 ? (
//         <table style={{ marginTop: "2rem", width: "100%", borderCollapse: "collapse" }}>
//           <thead>
//             <tr>
//               <th style={thStyle}>Movie</th>
//               <th style={thStyle}>Theater</th>
//               <th style={thStyle}>Date</th>
//               <th style={thStyle}>Time</th>
//               <th style={thStyle}></th>
//             </tr>
//           </thead>
//           <tbody>
//             {shows.map((show) => (
//               <tr key={show.showId}>
//                 <td style={tdStyle}>{show.movieName}</td>
//                 <td style={tdStyle}>{show.theaterName}</td>
//                 <td style={tdStyle}>{show.date}</td>
//                 <td style={tdStyle}>{show.time}</td>
//                 <td style={tdStyle}>
//                   <button
//                     onClick={() => handleBookNow(show.showId)}
//                     style={{
//                       padding: "0.4rem 0.8rem",
//                       backgroundColor: "#007bff",
//                       color: "#fff",
//                       border: "none",
//                       borderRadius: "4px",
//                       cursor: "pointer"
//                     }}
//                   >
//                     Book Now
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         !error && <p style={{ marginTop: "2rem" }}>No shows available for this movie on this date.</p>
//       )}
//     </div>
//   );
// };

// const thStyle = {
//   borderBottom: "2px solid #ccc",
//   padding: "0.5rem",
//   textAlign: "left"
// };

// const tdStyle = {
//   borderBottom: "1px solid #eee",
//   padding: "0.5rem"
// };

// export default BookingPage;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const BookingPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState("2025-08-10");
  const [shows, setShows] = useState([]);
  const [error, setError] = useState("");

  const userId = location.state?.userId;
  const userName = location.state?.userName;

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/show/showsByDate/${movieId}`, {
          params: { date: selectedDate }
        });
        setShows(response.data);
        setError("");
      } catch (err) {
        console.error("Error fetching shows:", err);
        if (err.response) {
          setError(err.response.data);
        } else {
          setError("Network error. Is your backend running?");
        }
        setShows([]);
      }
    };

    fetchShows();
  }, [movieId, selectedDate]);

  const handleBookNow = (showId) => {
    navigate(`/seats/${showId}`, {
      state: { userId, userName }
    });
  };

  const handleBackToMovies = () => {
    navigate("/movies", {
      state: { userId, userName }
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.header}>🎬 Available Shows</h2>

        <div style={styles.datePicker}>
          <label htmlFor="date" style={styles.label}>Select Date:</label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={styles.input}
          />
        </div>

        {error && <p style={styles.error}>{error}</p>}

        {shows.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Movie</th>
                <th style={styles.th}>Theater</th>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Time</th>
                <th style={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              {shows.map((show) => (
                <tr key={show.showId}>
                  <td style={styles.td}>{show.movieName}</td>
                  <td style={styles.td}>{show.theaterName}</td>
                  <td style={styles.td}>{show.date}</td>
                  <td style={styles.td}>{show.time}</td>
                  <td style={styles.td}>
                    <button onClick={() => handleBookNow(show.showId)} style={styles.bookButton}>
                      Book Now
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          !error && <p style={styles.noShows}>No shows available for this movie on this date.</p>
        )}

        <div style={styles.navBox}>
          <button onClick={handleBackToMovies} style={styles.backButton}>
            ⬅ Back to Movies
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#e3f2fd",
    minHeight: "100vh",
    padding: "2rem"
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
  },
  header: {
    color: "#d32f2f",
    fontWeight: "bold",
    marginBottom: "1.5rem",
    textAlign: "center"
  },
  datePicker: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1rem"
  },
  label: {
    fontWeight: "bold",
    marginRight: "1rem"
  },
  input: {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  error: {
    color: "red",
    marginTop: "1rem"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "2rem"
  },
  th: {
    borderBottom: "2px solid #ccc",
    padding: "0.5rem",
    textAlign: "left",
    backgroundColor: "#f5f5f5"
  },
  td: {
    borderBottom: "1px solid #eee",
    padding: "0.5rem"
  },
  bookButton: {
    padding: "0.4rem 0.8rem",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  noShows: {
    marginTop: "2rem",
    textAlign: "center",
    color: "#555"
  },
  navBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem"
  },
  backButton: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#f5f5f5",
    color: "#1976d2",
    border: "1px solid #1976d2",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default BookingPage;
