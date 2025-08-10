
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [emailId, setEmailId] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/user/login", {
//         emailId,
//         mobileNo
//       });

//       if (response.status === 200) {
//         navigate("/movies");
//       }
//     } catch (err) {
//       setError(err.response?.data || "Login failed");
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>🔐 Login to QuickShow</h2>

//         <div style={styles.form}>
//           <input
//             type="email"
//             placeholder="Enter Gmail"
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="text"
//             placeholder="Enter Mobile Number"
//             value={mobileNo}
//             onChange={(e) => setMobileNo(e.target.value)}
//             style={styles.input}
//           />
//           <button onClick={handleLogin} style={styles.button}>
//             Login
//           </button>
//           <button onClick={() => navigate("/")} style={styles.secondaryButton}>
//             Back to Home
//           </button>
//           {error && <p style={styles.error}>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     fontFamily: "'Segoe UI', sans-serif",
//     backgroundColor: "#e3f2fd",
//     color: "#333",
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "2.5rem",
//     borderRadius: "12px",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     width: "100%",
//     maxWidth: "400px"
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#d32f2f",
//     marginBottom: "1.5rem"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   input: {
//     padding: "0.8rem",
//     margin: "0.5rem 0",
//     width: "100%",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "1rem"
//   },
//   button: {
//     marginTop: "1rem",
//     padding: "0.8rem 1.5rem",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     width: "100%"
//   },
//   secondaryButton: {
//     marginTop: "0.5rem",
//     padding: "0.6rem 1.5rem",
//     backgroundColor: "#f5f5f5",
//     color: "#1976d2",
//     border: "1px solid #1976d2",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     width: "100%"
//   },
//   error: {
//     color: "red",
//     marginTop: "1rem"
//   }
// };

// export default LoginPage;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [emailId, setEmailId] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/user/login", {
//         emailId,
//         mobileNo
//       });

//       console.log("Login response:", response.data); // ✅ Debugging line

//       if (response.status === 200 && response.data) {
//         const { id, name } = response.data;

//         // ✅ Fallback name for testing if backend doesn't return it
//         const userName = name || "Prathamesh";

//         navigate("/movies", {
//           state: {
//             userId: id,
//             userName: userName
//           }
//         });
//       }
//     } catch (err) {
//       setError(err.response?.data || "Login failed");
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>🔐 Login to QuickShow</h2>

//         <div style={styles.form}>
//           <input
//             type="email"
//             placeholder="Enter Gmail"
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="text"
//             placeholder="Enter Mobile Number"
//             value={mobileNo}
//             onChange={(e) => setMobileNo(e.target.value)}
//             style={styles.input}
//           />
//           <button onClick={handleLogin} style={styles.button}>
//             Login
//           </button>
//           <button onClick={() => navigate("/")} style={styles.secondaryButton}>
//             Back to Home
//           </button>
//           {error && <p style={styles.error}>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     fontFamily: "'Segoe UI', sans-serif",
//     backgroundColor: "#e3f2fd",
//     color: "#333",
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "2.5rem",
//     borderRadius: "12px",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     width: "100%",
//     maxWidth: "400px"
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#d32f2f",
//     marginBottom: "1.5rem"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   input: {
//     padding: "0.8rem",
//     margin: "0.5rem 0",
//     width: "100%",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "1rem"
//   },
//   button: {
//     marginTop: "1rem",
//     padding: "0.8rem 1.5rem",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     width: "100%"
//   },
//   secondaryButton: {
//     marginTop: "0.5rem",
//     padding: "0.6rem 1.5rem",
//     backgroundColor: "#f5f5f5",
//     color: "#1976d2",
//     border: "1px solid #1976d2",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     width: "100%"
//   },
//   error: {
//     color: "red",
//     marginTop: "1rem"
//   }
// };

// export default LoginPage;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [emailId, setEmailId] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post("http://localhost:8080/user/login", {
//         emailId,
//         mobileNo
//       });

//       console.log("Login response:", response.data);

//       if (response.status === 200) {
//         const data = response.data;

//         // Case 1: Full user object returned
//         if (typeof data === "object" && data.id && data.name) {
//           navigate("/movies", {
//             state: {
//               userId: data.id,
//               userName: data.name
//             }
//           });
//         }
//         // Case 2: Only success message returned (fallback for testing)
//         else if (typeof data === "string" && data.toLowerCase().includes("success")) {
//           navigate("/movies", {
//             state: {
//               userId: "temp-id",
//               userName: "Prathamesh"
//             }
//           });
//         } else {
//           throw new Error("Unexpected response format");
//         }
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setError(err.response?.data || "Login failed");
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>🔐 Login to QuickShow</h2>

//         <div style={styles.form}>
//           <input
//             type="email"
//             placeholder="Enter Gmail"
//             value={emailId}
//             onChange={(e) => setEmailId(e.target.value)}
//             style={styles.input}
//           />
//           <input
//             type="text"
//             placeholder="Enter Mobile Number"
//             value={mobileNo}
//             onChange={(e) => setMobileNo(e.target.value)}
//             style={styles.input}
//           />
//           <button onClick={handleLogin} style={styles.button}>
//             Login
//           </button>
//           <button onClick={() => navigate("/")} style={styles.secondaryButton}>
//             Back to Home
//           </button>
//           {error && <p style={styles.error}>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   page: {
//     fontFamily: "'Segoe UI', sans-serif",
//     backgroundColor: "#e3f2fd",
//     color: "#333",
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "2.5rem",
//     borderRadius: "12px",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
//     textAlign: "center",
//     width: "100%",
//     maxWidth: "400px"
//   },
//   title: {
//     fontSize: "2rem",
//     color: "#d32f2f",
//     marginBottom: "1.5rem"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   input: {
//     padding: "0.8rem",
//     margin: "0.5rem 0",
//     width: "100%",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     fontSize: "1rem"
//   },
//   button: {
//     marginTop: "1rem",
//     padding: "0.8rem 1.5rem",
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     width: "100%"
//   },
//   secondaryButton: {
//     marginTop: "0.5rem",
//     padding: "0.6rem 1.5rem",
//     backgroundColor: "#f5f5f5",
//     color: "#1976d2",
//     border: "1px solid #1976d2",
//     borderRadius: "6px",
//     cursor: "pointer",
//     fontSize: "1rem",
//     width: "100%"
//   },
//   error: {
//     color: "red",
//     marginTop: "1rem"
//   }
// };

// export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  Stack
} from "@mui/material";

const LoginPage = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        emailId,
        mobileNo
      });

      const data = response.data;
      console.log("Login response:", data);

      if (typeof data === "object" && data.name) {
        const userName = data.name;

        localStorage.setItem("userName", userName);

        navigate("/movies", {
          state: {
            userName
          }
        });
      } else {
        throw new Error("Invalid login credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ color: "#d32f2f", fontWeight: "bold" }}>
            🔐 Login to QuickShow
          </Typography>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
          </Box>
          <Box mb={3}>
            <TextField
              fullWidth
              label="Mobile Number"
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
            />
          </Box>
          <Stack spacing={2}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
            <Button variant="outlined" fullWidth onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </Stack>
          {error && <Typography color="error" mt={2}>{error}</Typography>}
        </Paper>
      </Container>
    </div>
  );
};

const styles = {
  page: {
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#e3f2fd",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem"
  }
};

export default LoginPage;
