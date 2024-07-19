// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Card,
//   CardContent,
//   CardMedia,
// } from "@mui/material";

// function BlogDetail() {
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   const fetchDetails = async () => {
//     try {
//       const res = await axios.get(`http://localhost:3001/api/blog/${id}`);
//       const data = res.data;
//       setBlog(data.blog);
//       setLoading(false);
//     } catch (err) {
//       setError("Error fetching blog details");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDetails();
//   }, [id]);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   if (error) {
//     return <Typography color="error">{error}</Typography>;
//   }

//   return (
//     <Card sx={{ margin: 2 }}>
//       <CardMedia component="img" height="400" image={blog.image} alt={blog.title} />
//       <CardContent>
//         <Typography variant="h4" component="div">
//           {blog.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" paragraph>
//           {blog.content}
//         </Typography>
//         <Typography variant="subtitle1" color="text.secondary">
//           By {blog.user.name}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

// export default BlogDetail;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Card,
//   CardContent,
//   CardMedia,
// } from "@mui/material";

// function BlogDetail() {
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { id } = useParams();

//   const fetchDetails = async () => {
//     try {
//       const res = await axios.get(`http://localhost:3001/api/blog/${id}`);
//       const data = res.data;
//       setBlog(data.blog);
//       setLoading(false);
//     } catch (err) {
//       setError("Error fetching blog details");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDetails();
//   }, [id]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <Typography color="error">{error}</Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
//       <Card sx={{ width: "60%", margin: 2 }}>
//         <CardMedia component="img" height="400" image={blog.image} alt={blog.title} />
//         <CardContent>
//           <Typography variant="h4" component="div">
//             {blog.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" paragraph>
//             {blog.content}
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary">
//             By {blog.user.name}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// export default BlogDetail;


// BlogDetail.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Card, CardContent, CardMedia } from "@mui/material";
import Comment from './Comment';  // Assuming Comment component exists and is correctly set up

function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/blog/${id}`);
        setBlog(res.data.blog);
        setLoading(false);
      } catch (err) {
        setError("Error fetching blog details");
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Card sx={{ width: "60%", margin: 2 }}>
        <CardMedia component="img" height="400" image={blog.image} alt={blog.title} />
        <CardContent>
          <Typography variant="h4" component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            {blog.content}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            By {blog.user.name}
          </Typography>
        </CardContent>
        <Comment postId={id} />  {/* Add comments section here */}
      </Card>
    </Box>
  );
}

export default BlogDetail;
