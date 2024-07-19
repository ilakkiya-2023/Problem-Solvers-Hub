import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Box, TextField, Button, Typography } from "@mui/material";

const EditBlog = () => {
  const [blog, setBlog] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/blog/${id}`);
        const data = res.data;
        setBlog(data.blog);
        setTitle(data.blog.title);
        setContent(data.blog.content);
        setCategory(data.blog.category);
        setImage(data.blog.image);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };

    fetchBlog();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/api/blog/${id}`, {
        title,
        content,
        category,
        image,
      });
      navigate(`/blogs/${id}`);
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  return (
    blog && (
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" align="center">Edit Blog</Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          label="Content"
          variant="outlined"
          multiline
          rows={4}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <TextField
          label="Category"
          variant="outlined"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <TextField
          label="Image URL"
          variant="outlined"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Update Blog
        </Button>
      </Box>
    )
  );
};

export default EditBlog;
