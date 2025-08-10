// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, Paper, Box, CircularProgress } from '@mui/material';
// import { useNavigate } from 'react-router-dom';


// const MoviesPage = () => {
//   const [collections, setCollections] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const movieIds = [1, 2, 3]; // Replace with dynamic IDs later

//     Promise.all(
//       movieIds.map(id =>
//         axios.get(`http://localhost:8080/totalCollection/${id}`)
//           .then(res => ({ id, collection: res.data }))
//           .catch(() => ({ id, collection: 'Error fetching data' }))
//       )
//     ).then(data => {
//       setCollections(data);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
//         🎥 Movie Collections
//       </Typography>

//       {loading ? (
//         <Box display="flex" justifyContent="center" mt={4}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         collections.map(movie => (
//           <Paper key={movie.id} sx={{ padding: 2, marginBottom: 2 }}>
//             <Typography variant="h6">Movie ID: {movie.id}</Typography>
//             <Typography>Total Collection: ₹{movie.collection}</Typography>
//           </Paper>
//         ))
//       )}
//     </Container>
//   );
// };

// export default MoviesPage;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Typography,
//   Paper,
//   Box,
//   CircularProgress,
//   Button,
// } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const MoviesPage = () => {
//   const [collections, setCollections] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const movieIds = [1, 2, 3]; // Replace with dynamic IDs later

//     Promise.all(
//       movieIds.map(id =>
//         axios.get(`http://localhost:8080/totalCollection/${id}`)
//           .then(res => ({ id, collection: res.data }))
//           .catch(() => ({ id, collection: 'Error fetching data' }))
//       )
//     ).then(data => {
//       setCollections(data);
//       setLoading(false);
//     });
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
//         🎥 Movie Collections
//       </Typography>

//       {loading ? (
//         <Box display="flex" justifyContent="center" mt={4}>
//           <CircularProgress />
//         </Box>
//       ) : (
//         collections.map(movie => (
//           <Paper key={movie.id} sx={{ padding: 2, marginBottom: 2 }}>
//             <Typography variant="h6">Movie ID: {movie.id}</Typography>
//             <Typography>Total Collection: ₹{movie.collection}</Typography>
//             <Button
//               variant="outlined"
//               color="primary"
//               sx={{ mt: 2 }}
//               onClick={() => navigate(`/movie/${movie.id}`)}
//             >
//               View Details
//             </Button>
//           </Paper>
//         ))
//       )}
//     </Container>
//   );
// };

// export default MoviesPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   CircularProgress,
//   Box,
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const userId = location.state?.userId;
//   const userName = location.state?.userName;

//   useEffect(() => {
//     axios.get('http://localhost:8080/movie/all')
//       .then(res => {
//         setMovies(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('❌ Failed to fetch movies:', err);
//         setLoading(false);
//       });
//   }, []);

//   const goToDetails = (movieId) => {
//     navigate(`/movie/${movieId}`, {
//       state: { userId, userName },
//     });
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={6}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         🎬 Welcome, {userName}! Explore Movies
//       </Typography>
//       <Grid container spacing={3}>
//         {movies.map(movie => (
//           <Grid item xs={12} sm={6} md={4} key={movie.id}>
//             <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6" gutterBottom>{movie.movieName}</Typography>
//                 <Typography variant="body2">🎭 Genre: {movie.genre}</Typography>
//                 <Typography variant="body2">🗣 Language: {movie.language}</Typography>
//                 <Typography variant="body2">⏱ Duration: {movie.duration} mins</Typography>
//                 <Typography variant="body2">⭐ Rating: {movie.rating}</Typography>
//                 <Typography variant="body2">📅 Release: {movie.releaseDate}</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   fullWidth
//                   onClick={() => goToDetails(movie.id)}
//                 >
//                   View Details
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default MoviesPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   CircularProgress,
//   Box,
//   Alert,
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const userId = location.state?.userId;
//   const userName = location.state?.userName;

//   useEffect(() => {
//     console.log('📦 useEffect triggered: fetching movies...');
//     axios.get('http://localhost:8080/movie/all')
//       .then(res => {
//         console.log('🎥 Movies fetched:', res.data);
//         setMovies(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('❌ Axios error:', err.message);
//         setError('Failed to load movies. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   const goToDetails = (movieId) => {
//     navigate(`/movie/${movieId}`, {
//       state: { userId, userName },
//     });
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" mt={6}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         🎬 Welcome, {userName || 'Guest'}! Explore Movies
//       </Typography>

//       {error && (
//         <Alert severity="error" sx={{ mb: 2 }}>
//           {error}
//         </Alert>
//       )}

//       <Grid container spacing={3}>
//         {movies.slice(0, 10).map(movie => (
//           <Grid item xs={12} sm={6} md={4} key={movie.id}>
//             <Card elevation={4} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6" gutterBottom>{movie.movieName}</Typography>
//                 <Typography variant="body2">🎭 Genre: {movie.genre}</Typography>
//                 <Typography variant="body2">🗣 Language: {movie.language}</Typography>
//                 <Typography variant="body2">⏱ Duration: {movie.duration} mins</Typography>
//                 <Typography variant="body2">⭐ Rating: {movie.rating}</Typography>
//                 <Typography variant="body2">📅 Release: {movie.releaseDate}</Typography>
//               </CardContent>
//               <CardActions>
//                 <Button
//                   size="small"
//                   variant="contained"
//                   fullWidth
//                   onClick={() => goToDetails(movie.id)}
//                 >
//                   View Details
//                 </Button>
//               </CardActions>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default MoviesPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   CircularProgress,
//   Box,
//   Alert,
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const userId = location.state?.userId;
//   const userName = location.state?.userName;

//   useEffect(() => {
//     axios.get('http://localhost:8080/movie/all')
//       .then(res => {
//         setMovies(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to load movies. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   const goToDetails = (movieId) => {
//     navigate(`/movie/${movieId}`, {
//       state: { userId, userName },
//     });
//   };

//   if (loading) {
//     return (
//       <Box sx={styles.loadingBox}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={styles.page}>
//       <Container maxWidth="lg">
//         <Typography variant="h4" gutterBottom sx={styles.header}>
//           🎬 Welcome, {userName || 'Guest'}! Explore Movies
//         </Typography>

//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {error}
//           </Alert>
//         )}

//         <Grid container spacing={3}>
//           {movies.slice(0, 10).map(movie => (
//             <Grid item xs={12} sm={6} md={4} key={movie.id}>
//               <Card sx={styles.card}>
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography variant="h6" sx={styles.movieTitle}>
//                     {movie.movieName}
//                   </Typography>
//                   <Typography variant="body2">🎭 Genre: {movie.genre}</Typography>
//                   <Typography variant="body2">🗣 Language: {movie.language}</Typography>
//                   <Typography variant="body2">⏱ Duration: {movie.duration} mins</Typography>
//                   <Typography variant="body2">⭐ Rating: {movie.rating}</Typography>
//                   <Typography variant="body2">📅 Release: {movie.releaseDate}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     size="small"
//                     variant="contained"
//                     fullWidth
//                     sx={styles.button}
//                     onClick={() => goToDetails(movie.id)}
//                   >
//                     View Details
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={styles.navBox}>
//           <Button
//             variant="outlined"
//             sx={styles.homeButton}
//             onClick={() => navigate('/')}
//           >
//             ⬅ Back to Home
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// const styles = {
//   page: {
//     backgroundColor: '#e3f2fd',
//     fontFamily: "'Segoe UI', sans-serif",
//     minHeight: '100vh',
//     padding: '2rem 0'
//   },
//   loadingBox: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '80vh',
//     backgroundColor: '#e3f2fd'
//   },
//   header: {
//     textAlign: 'center',
//     color: '#d32f2f',
//     fontWeight: 'bold',
//     marginBottom: '1rem'
//   },
//   navBox: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '2rem'
//   },
//   homeButton: {
//     borderColor: '#1976d2',
//     color: '#1976d2',
//     textTransform: 'none',
//     fontWeight: 'bold'
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100%'
//   },
//   movieTitle: {
//     color: '#1976d2',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem'
//   },
//   button: {
//     backgroundColor: '#1976d2',
//     color: '#fff',
//     textTransform: 'none',
//     fontWeight: 'bold'
//   }
// };

// export default MoviesPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardActions,
//   Button,
//   CircularProgress,
//   Box,
//   Alert,
//   CardMedia
// } from '@mui/material';
// import { useNavigate, useLocation } from 'react-router-dom';

// const MoviesPage = () => {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   const userId = location.state?.userId;
//   const userName = location.state?.userName;

//   const imageMap = {
//     "The Last Stand": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639868/the_last_stand_tcb2gb.jpg",
//     "Laugh Riot": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639862/laugh_riot_umm625.jpg",
//     "Life Unfolded": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639862/life_unfolded_ockyre.jpg",
//     "Jungle Quest": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639861/jungle_quest_ece4ug.jpg",
//     "Night Whispers": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639863/night_whispers_nifzp8.jpg",
//     "Dil Ki Baat": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639862/dil_ki_baat_dn9raf.webp",
//     "The Braveheart": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639863/the_braveheart_hdb19r.png",
//     "Voices of Change": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639868/voices_of_change_np9zye.jpg",
//     "Chasing Glory": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639861/chasing_glory_ku7ul2.jpg",
//     "Battlefront": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639861/battlefront_d7kwmf.jpg"
//   };

//   const defaultImageUrl = "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639860/default_poster.jpg";

//   useEffect(() => {
//     axios.get('http://localhost:8080/movie/all')
//       .then(res => {
//         setMovies(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         setError('Failed to load movies. Please try again later.');
//         setLoading(false);
//       });
//   }, []);

//   const goToDetails = (movieId) => {
//     navigate(`/movie/${movieId}`, {
//       state: { userId, userName },
//     });
//   };

//   if (loading) {
//     return (
//       <Box sx={styles.loadingBox}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Box sx={styles.page}>
//       <Container maxWidth="lg">
//         <Typography variant="h4" gutterBottom sx={styles.header}>
//           🎬 Welcome, {userName || 'Guest'}! Explore Movies
//         </Typography>

//         {error && (
//           <Alert severity="error" sx={{ mb: 2 }}>
//             {error}
//           </Alert>
//         )}

//         <Grid container spacing={3}>
//           {movies.slice(0, 10).map(movie => (
//             <Grid item xs={12} sm={6} md={4} key={movie.id}>
//               <Card sx={styles.card}>
//                 <CardMedia
//                   component="img"
//                   height="200"
//                   image={imageMap[movie.movieName] || defaultImageUrl}
//                   alt={movie.movieName}
//                   sx={styles.cardMedia}
//                 />
//                 <CardContent sx={{ flexGrow: 1 }}>
//                   <Typography variant="h6" sx={styles.movieTitle}>
//                     {movie.movieName}
//                   </Typography>
//                   <Typography variant="body2">🎭 Genre: {movie.genre}</Typography>
//                   <Typography variant="body2">🗣 Language: {movie.language}</Typography>
//                   <Typography variant="body2">⏱ Duration: {movie.duration} mins</Typography>
//                   <Typography variant="body2">⭐ Rating: {movie.rating}</Typography>
//                   <Typography variant="body2">📅 Release: {movie.releaseDate}</Typography>
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     size="small"
//                     variant="contained"
//                     fullWidth
//                     sx={styles.button}
//                     onClick={() => goToDetails(movie.id)}
//                   >
//                     View Details
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Box sx={styles.navBox}>
//           <Button
//             variant="outlined"
//             sx={styles.homeButton}
//             onClick={() => navigate('/')}
//           >
//             ⬅ Back to Home
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// const styles = {
//   page: {
//     backgroundColor: '#e3f2fd',
//     fontFamily: "'Segoe UI', sans-serif",
//     minHeight: '100vh',
//     padding: '2rem 0'
//   },
//   loadingBox: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     minHeight: '80vh',
//     backgroundColor: '#e3f2fd'
//   },
//   header: {
//     textAlign: 'center',
//     color: '#d32f2f',
//     fontWeight: 'bold',
//     marginBottom: '1rem'
//   },
//   navBox: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: '2rem'
//   },
//   homeButton: {
//     borderColor: '#1976d2',
//     color: '#1976d2',
//     textTransform: 'none',
//     fontWeight: 'bold'
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     display: 'flex',
//     flexDirection: 'column',
//     height: '100%'
//   },
//   cardMedia: {
//     objectFit: 'cover',
//     borderTopLeftRadius: '12px',
//     borderTopRightRadius: '12px'
//   },
//   movieTitle: {
//     color: '#1976d2',
//     fontWeight: 'bold',
//     marginBottom: '0.5rem'
//   },
//   button: {
//     backgroundColor: '#1976d2',
//     color: '#fff',
//     textTransform: 'none',
//     fontWeight: 'bold'
//   }
// };

// export default MoviesPage;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CircularProgress,
  Box,
  Alert,
  CardMedia,
  Stack
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Get user info from state or localStorage
  const userId = location.state?.userId || localStorage.getItem("userId");
  const userName = location.state?.userName || localStorage.getItem("userName");

  const imageMap = {
    "The Last Stand": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639868/the_last_stand_tcb2gb.jpg",
    "Laugh Riot": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639862/laugh_riot_umm625.jpg",
    "Life Unfolded": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639862/life_unfolded_ockyre.jpg",
    "Jungle Quest": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639861/jungle_quest_ece4ug.jpg",
    "Night Whispers": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639863/night_whispers_nifzp8.jpg",
    "Dil Ki Baat": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639862/dil_ki_baat_dn9raf.webp",
    "The Braveheart": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639863/the_braveheart_hdb19r.png",
    "Voices of Change": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639868/voices_of_change_np9zye.jpg",
    "Chasing Glory": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639861/chasing_glory_ku7ul2.jpg",
    "Battlefront": "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639861/battlefront_d7kwmf.jpg"
  };

  const defaultImageUrl = "https://res.cloudinary.com/dzoowqxpk/image/upload/v1754639860/default_poster.jpg";

  useEffect(() => {
    axios.get('http://localhost:8080/movie/all')
      .then(res => {
        setMovies(res.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load movies. Please try again later.');
        setLoading(false);
      });
  }, []);

  const goToDetails = (movieId) => {
    navigate(`/movie/${movieId}`, {
      state: { userId, userName },
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  if (loading) {
    return (
      <Box sx={styles.loadingBox}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={styles.page}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom sx={styles.header}>
          🎬 Welcome, {userName || 'Guest'}! Explore Movies
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <Grid container spacing={3}>
          {movies.slice(0, 10).map(movie => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <Card sx={styles.card}>
                <CardMedia
                  component="img"
                  height="200"
                  image={imageMap[movie.movieName] || defaultImageUrl}
                  alt={movie.movieName}
                  sx={styles.cardMedia}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={styles.movieTitle}>
                    {movie.movieName}
                  </Typography>
                  <Typography variant="body2">🎭 Genre: {movie.genre}</Typography>
                  <Typography variant="body2">🗣 Language: {movie.language}</Typography>
                  <Typography variant="body2">⏱ Duration: {movie.duration} mins</Typography>
                  <Typography variant="body2">⭐ Rating: {movie.rating}</Typography>
                  <Typography variant="body2">📅 Release: {movie.releaseDate}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    fullWidth
                    sx={styles.button}
                    onClick={() => goToDetails(movie.id)}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Button
            variant="outlined"
            sx={styles.homeButton}
            onClick={() => navigate('/')}
          >
            ⬅ Back to Home
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleLogout}
          >
            🔓 Logout
          </Button>
        </Stack>
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
    marginBottom: '1rem'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  cardMedia: {
    objectFit: 'cover',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px'
  },
  movieTitle: {
    color: '#1976d2',
    fontWeight: 'bold',
    marginBottom: '0.5rem'
  },
  button: {
    backgroundColor: '#1976d2',
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold'
  },
  homeButton: {
    borderColor: '#1976d2',
    color: '#1976d2',
    textTransform: 'none',
    fontWeight: 'bold'
  }
};

export default MoviesPage;
