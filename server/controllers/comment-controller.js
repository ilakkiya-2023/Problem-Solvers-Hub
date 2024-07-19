// comment-controller.js
// import Comment from "../models/Comment.js"; // Ensure the path is correct
// import Blog from "../models/Blog.js";


// export const addCommentToBlog = async (req, res) => {
//   const { content, user } = req.body;
//   const blogId = req.params.id;

//   try {
//     const blog = await Blog.findById(blogId);
//     const newComment = new Comment({ content, user, blog: blogId });
//     await newComment.save();

//     blog.comments.push(newComment);
//     await blog.save();

//     res.status(201).json(newComment);
//   } catch (error) {
//     res.status(500).json({ message: "Adding comment failed" });
//   }
// };

// export const getCommentsByBlogId = async (req, res) => {
//   const blogId = req.params.id;

//   try {
//     const comments = await Comment.find({ blog: blogId }).populate("user");
//     res.status(200).json({ comments });
//   } catch (error) {
//     res.status(500).json({ message: "Fetching comments failed" });
//   }
// };

import Comment from "../model/Comment.js"; // Ensure the path is correct
import Blog from "../model/Blog.js";

export const addCommentToBlog = async (req, res) => {
  const { content, user } = req.body;
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);
    const newComment = new Comment({ content, user, blog: blogId });
    await newComment.save();

    blog.comments.push(newComment);
    await blog.save();

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: "Adding comment failed" });
  }
};

export const getCommentsByBlogId = async (req, res) => {
  const blogId = req.params.id;

  try {
    const comments = await Comment.find({ blog: blogId }).populate("user");
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ message: "Fetching comments failed" });
  }
};
