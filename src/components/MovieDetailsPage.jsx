// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// import {
//   Container,
//   Typography,
//   Paper,
//   Box,
//   Button,
//   TextField,
//   Checkbox,
//   FormControlLabel,
// } from '@mui/material';

// const MovieDetailsPage = () => {
//   const { id } = useParams(); // movieId
//   const [movie, setMovie] = useState(null);
//   const [showId, setShowId] = useState('');
//   const [userId, setUserId] = useState('');
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   useEffect(() => {
//     axios.get(`http://localhost:8080/movie/${id}`)
//       .then(res => setMovie(res.data))
//       .catch(err => console.error(err));
//   }, [id]);

//   const handleSeatChange = (e) => {
//     const seat = e.target.value;
//     if (e.target.checked) {
//       setSelectedSeats([...selectedSeats, seat]);
//     } else {
//       setSelectedSeats(selectedSeats.filter(s => s !== seat));
//     }
//   };

//   const handleBooking = async () => {
//     try {
//       const payload = {
//         showId: parseInt(showId),
//         userId: parseInt(userId),
//         requestSeats: selectedSeats,
//       };
//       await axios.post('http://localhost:8080/ticket/book', payload);
//       alert('🎟️ Ticket booked successfully!');
//     } catch (error) {
//       console.error('❌ Booking failed:', error);
//       alert('Booking failed. Please check inputs.');
//     }
//   };

//   return (
//     <Container>
//       {movie ? (
//         <Paper sx={{ padding: 4, marginTop: 4 }}>
//           <Typography variant="h4">{movie.name}</Typography>
//           <Typography variant="subtitle1">Genre: {movie.genre}</Typography>
//           <Typography variant="subtitle2">Duration: {movie.duration} mins</Typography>

//           <Box mt={4}>
//             <Typography variant="h6">🎟️ Book Tickets</Typography>
//             <TextField
//               label="Show ID"
//               value={showId}
//               onChange={(e) => setShowId(e.target.value)}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="User ID"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <Typography>Select Seats:</Typography>
//             {['A1', 'A2', 'A3', 'B1', 'B2'].map(seat => (
//               <FormControlLabel
//                 key={seat}
//                 control={
//                   <Checkbox
//                     value={seat}
//                     onChange={handleSeatChange}
//                   />
//                 }
//                 label={seat}
//               />
//             ))}
//             <Button variant="contained" color="primary" onClick={handleBooking} sx={{ mt: 2 }}>
//               Book Ticket
//             </Button>
//           </Box>
//         </Paper>
//       ) : (
//         <Typography>Loading movie details...</Typography>
//       )}
//     </Container>
//   );
// };

// export default MovieDetailsPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Box,
//   Alert,
//   Button,
// } from '@mui/material';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';

// const MovieDetailsPage = () => {
//   const { movieId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userId = location.state?.userId;
//   const userName = location.state?.userName;

//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     console.log(`📦 Fetching movie ID: ${movieId}`);
//     axios.get(`http://localhost:8080/movie/${movieId}`)
//       .then(res => {
//         console.log('🎬 Movie details:', res.data);
//         setMovie(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('❌ Failed to fetch movie:', err.message);
//         setError('Movie not found or failed to load.');
//         setLoading(false);
//       });
//   }, [movieId]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={6}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Container sx={{ mt: 4 }}>
//         <Alert severity="error">{error}</Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         🎬 Movie Details for {userName || 'Guest'}
//       </Typography>

//       <Card elevation={4} sx={{ maxWidth: 600, margin: 'auto' }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>{movie.movieName}</Typography>
//           <Typography variant="body1">🎭 Genre: {movie.genre}</Typography>
//           <Typography variant="body1">🗣 Language: {movie.language}</Typography>
//           <Typography variant="body1">⏱ Duration: {movie.duration} mins</Typography>
//           <Typography variant="body1">⭐ Rating: {movie.rating}</Typography>
//           <Typography variant="body1">📅 Release: {movie.releaseDate}</Typography>
//         </CardContent>
//       </Card>

//       <Box mt={3} display="flex" justifyContent="center">
//         <Button variant="contained" onClick={() => navigate(-1)}>
//           ⬅ Back to Movies
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default MovieDetailsPage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Card,
//   CardContent,
//   Typography,
//   CircularProgress,
//   Box,
//   Alert,
//   Button,
// } from '@mui/material';
// import { useParams, useLocation, useNavigate } from 'react-router-dom';

// const MovieDetailsPage = () => {
//   const { movieId } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const userId = location.state?.userId;
//   const userName = location.state?.userName;

//   const [movie, setMovie] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     console.log(`📦 Fetching movie ID: ${movieId}`);
//     axios.get(`http://localhost:8080/movie/${movieId}`)
//       .then(res => {
//         console.log('🎬 Movie details:', res.data);
//         setMovie(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('❌ Failed to fetch movie:', err.message);
//         setError('Movie not found or failed to load.');
//         setLoading(false);
//       });
//   }, [movieId]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={6}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Container sx={{ mt: 4 }}>
//         <Alert severity="error">{error}</Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         🎬 Movie Details for {userName || 'Guest'}
//       </Typography>

//       <Card elevation={4} sx={{ maxWidth: 600, margin: 'auto' }}>
//         <CardContent>
//           <Typography variant="h5" gutterBottom>{movie.movieName}</Typography>
//           <Typography variant="body1">🎭 Genre: {movie.genre}</Typography>
//           <Typography variant="body1">🗣 Language: {movie.language}</Typography>
//           <Typography variant="body1">⏱ Duration: {movie.duration} mins</Typography>
//           <Typography variant="body1">⭐ Rating: {movie.rating}</Typography>
//           <Typography variant="body1">📅 Release: {movie.releaseDate}</Typography>
//         </CardContent>
//       </Card>

//       <Box mt={3} display="flex" justifyContent="center" gap={2}>
//         <Button variant="outlined" onClick={() => navigate(-1)}>
//           ⬅ Back to Movies
//         </Button>

//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() =>
//             navigate(`/book/${movieId}`, {
//               state: { userId, userName, movieName: movie.movieName },
//             })
//           }
//         >
//           🎟️ Book Ticket
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default MovieDetailsPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Box,
  Alert,
  Button,
} from '@mui/material';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const userId = location.state?.userId;
  const userName = location.state?.userName;

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/movie/${movieId}`)
      .then(res => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Movie not found or failed to load.');
        setLoading(false);
      });
  }, [movieId]);

  if (loading) {
    return (
      <Box sx={styles.loadingBox}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={styles.page}>
        <Container maxWidth="sm">
          <Alert severity="error">{error}</Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={styles.page}>
      <Container maxWidth="sm">
        <Typography variant="h4" gutterBottom sx={styles.header}>
          🎬 Movie Details for {userName || 'Guest'}
        </Typography>

        <Card elevation={4} sx={styles.card}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={styles.movieTitle}>
              {movie.movieName}
            </Typography>
            <Typography variant="body1">🎭 Genre: {movie.genre}</Typography>
            <Typography variant="body1">🗣 Language: {movie.language}</Typography>
            <Typography variant="body1">⏱ Duration: {movie.duration} mins</Typography>
            <Typography variant="body1">⭐ Rating: {movie.rating}</Typography>
            <Typography variant="body1">📅 Release: {movie.releaseDate}</Typography>
          </CardContent>
        </Card>

        <Box mt={3} display="flex" justifyContent="center" gap={2}>
          <Button variant="outlined" onClick={() => navigate(-1)}>
            ⬅ Back to Movies
          </Button>

          <Button
            variant="contained"
            sx={styles.bookButton}
            onClick={() =>
              navigate(`/book/${movieId}`, {
                state: { userId, userName, movieName: movie.movieName },
              })
            }
          >
            🎟️ Book Ticket
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  page: {
    backgroundColor: '#e3f2fd',
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: '100vh',
    padding: '2rem 0'
  },
  loadingBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    backgroundColor: '#e3f2fd'
  },
  header: {
    textAlign: 'center',
    color: '#d32f2f',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '1.5rem'
  },
  movieTitle: {
    color: '#1976d2',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  bookButton: {
    backgroundColor: '#1976d2',
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold'
  }
};

export default MovieDetailsPage;
