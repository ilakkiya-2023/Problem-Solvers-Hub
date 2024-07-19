// components/Comment.js
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Box, Button, TextField, Typography } from "@mui/material";

// const Comment = ({ blogId }) => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   const fetchComments = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3001/api/blog/${blogId}/comments`);
//       setComments(response.data.comments);
//     } catch (error) {
//       console.log("Error fetching comments:", error);
//     }
//   };

//   const handleAddComment = async () => {
//     try {
//       const user = localStorage.getItem("userId");
//       const response = await axios.post(`http://localhost:3001/api/blog/${blogId}/comments`, {
//         content: newComment,
//         userId: user, // Change "user" to "userId"
//       });
//       setNewComment("");
//       fetchComments();
//     } catch (error) {
//       console.log("Error adding comment:", error);
//     }
//   };

//   useEffect(() => {
//     fetchComments();
//   }, [blogId]);

//   return (
//     <Box>
//       <Typography variant="h6">Comments</Typography>
//       <Box>
//         {comments.map((comment) => (
//           <Typography key={comment._id}>
//             {comment.content} - {comment.user.name}
//           </Typography>
//         ))}
//       </Box>
//       <TextField
//         label="Add a comment"
//         value={newComment}
//         onChange={(e) => setNewComment(e.target.value)}
//         fullWidth
//         multiline
//         rows={4}
//         variant="outlined"
//         margin="normal"
//       />
//       <Button variant="contained" color="primary" onClick={handleAddComment}>
//         Add Comment
//       </Button>
//     </Box>
//   );
// };

// export default Comment;

// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Avatar, TextField, Button } from '@mui/material';
// import axios from 'axios';

// const Comment = ({ postId }) => {
//   const [comments, setComments] = useState([]);
//   const [newComment, setNewComment] = useState("");

//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const res = await axios.get(`http://localhost:3001/api/comments/${postId}`);
//         setComments(res.data.comments);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchComments();
//   }, [postId]);

//   const handleCommentChange = (event) => {
//     setNewComment(event.target.value);
//   };

//   const handleCommentSubmit = async () => {
//     try {
//       await axios.post(`http://localhost:3001/api/comments`, {
//         postId,
//         content: newComment,
//       });
//       setNewComment("");
//       // Refresh comments
//       const res = await axios.get(`http://localhost:3001/api/comments/${postId}`);
//       setComments(res.data.comments);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <Box>
//       <Typography variant="h6">Comments</Typography>
//       {comments.map((comment) => (
//         <Box key={comment._id} display="flex" alignItems="center" marginBottom={2}>
//           <Avatar sx={{ bgcolor: "blue" }}>
//             {comment.user.name.charAt(0)}
//           </Avatar>
//           <Box marginLeft={2}>
//             <Typography variant="body1">{comment.user.name}</Typography>
//             <Typography variant="body2">{comment.content}</Typography>
//           </Box>
//         </Box>
//       ))}
//       <TextField
//         label="Add a comment"
//         variant="outlined"
//         fullWidth
//         value={newComment}
//         onChange={handleCommentChange}
//       />
//       <Button variant="contained" color="primary" onClick={handleCommentSubmit} sx={{ marginTop: 2 }}>
//         Post Comment
//       </Button>
//     </Box>
//   );
// };

// export default Comment;

// Comment.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, TextField, Button } from '@mui/material';
import axios from 'axios';

const Comment = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/blog/${postId}/comments`);
        setComments(res.data.comments);
      } catch (err) {
        console.log(err);
      }
    };

    fetchComments();
  }, [postId]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      await axios.post(`http://localhost:3001/api/blog/${postId}/comments`, {
        content: newComment,
        userId: localStorage.getItem("userId")  // Ensure you have user authentication in place
      });
      setNewComment("");
      // Refresh comments
      const res = await axios.get(`http://localhost:3001/api/blog/${postId}/comments`);
      setComments(res.data.comments);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box>
      <Typography variant="h6">Comments</Typography>
      {comments.map((comment) => (
        <Box key={comment._id} display="flex" alignItems="center" marginBottom={2}>
          <Avatar sx={{ bgcolor: "blue" }}>
            {comment.user.name.charAt(0)}
          </Avatar>
          <Box marginLeft={2}>
            <Typography variant="body1">{comment.user.name}</Typography>
            <Typography variant="body2">{comment.content}</Typography>
          </Box>
        </Box>
      ))}
      <TextField
        label="Add a comment"
        variant="outlined"
        fullWidth
        value={newComment}
        onChange={handleCommentChange}
      />
      <Button variant="contained" color="primary" onClick={handleCommentSubmit} sx={{ marginTop: 2 }}>
        Post Comment
      </Button>
    </Box>
  );
};

export default Comment;
