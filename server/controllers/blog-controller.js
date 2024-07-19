// import mongoose from "mongoose";
// import Blog from "../model/Blog.js";
// import User from "../model/User.js";

// export const getAllBlogs = async (req, res, next) => {
//   try {
//     const blogs = await Blog.find().populate("user");
//     if (!blogs || blogs.length === 0) {
//       return res.status(404).json({ message: "No blogs found" });
//     }
//     return res.status(200).json({ blogs });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error fetching blogs" });
//   }
// };

// export const addBlog = async (req, res, next) => {
//   const { title, content, image, category, user } = req.body;

//   try {
//     const existingUser = await User.findById(user);
//     if (!existingUser) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const blog = new Blog({
//       title,
//       content,
//       image,
//       category,
//       user,
//     });

//     const session = await mongoose.startSession();
//     session.startTransaction();
//     await blog.save({ session });
//     existingUser.blogs.push(blog);
//     await existingUser.save({ session });
//     await session.commitTransaction();
//     session.endSession();

//     return res.status(201).json({ blog });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Failed to add blog" });
//   }
// };

// export const updateBlog = async (req, res, next) => {
//   const { title, content, image, category } = req.body;
//   const blogId = req.params.id;

//   try {
//     const blog = await Blog.findById(blogId);
//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     blog.title = title;
//     blog.content = content;
//     blog.image = image;
//     blog.category = category;

//     await blog.save();

//     return res.status(200).json({ blog });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error updating blog" });
//   }
// };

// export const getBlogById = async (req, res, next) => {
//   const id = req.params.id;

//   try {
//     const blog = await Blog.findById(id);
//     if (!blog) {
//       return res.status(404).json({ message: "No blog found" });
//     }
//     return res.status(200).json({ blog });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error fetching blog" });
//   }
// };

// export const deleteBlog = async (req, res, next) => {
//   const blogId = req.params.id;

//   try {
//     const blog = await Blog.findByIdAndRemove(blogId).populate("user");
//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     await blog.user.blogs.pull(blog);
//     await blog.user.save();

//     return res.status(200).json({ message: "Blog deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error deleting blog" });
//   }
// };

// export const getUserById = async (req, res, next) => {
//   const userId = req.params.id;

//   try {
//     const userBlogs = await User.findById(userId).populate("blogs");
//     if (!userBlogs) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     return res.status(200).json({ user: userBlogs });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error fetching user blogs" });
//   }
// };import mongoose from "mongoose";


// import Blog from "../model/Blog.js"; // Corrected path
// import User from "../model/User.js";
// import Comment from "../model/Comment.js";

// export const getAllBlogs = async (req, res, next) => {
//   try {
//     const blogs = await Blog.find().populate("user");
//     if (!blogs || blogs.length === 0) {
//       return res.status(404).json({ message: "No blogs found" });
//     }
//     return res.status(200).json({ blogs });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error fetching blogs" });
//   }
// };

// export const addBlog = async (req, res, next) => {
//   const { title, content, image, category, user } = req.body;

//   try {
//     const existingUser = await User.findById(user);
//     if (!existingUser) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const blog = new Blog({
//       title,
//       content,
//       image,
//       category,
//       user,
//     });

//     const session = await mongoose.startSession();
//     session.startTransaction();
//     await blog.save({ session });
//     existingUser.blogs.push(blog);
//     await existingUser.save({ session });
//     await session.commitTransaction();
//     session.endSession();

//     return res.status(201).json({ blog });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Failed to add blog" });
//   }
// };

// export const updateBlog = async (req, res, next) => {
//   const { title, content, image, category } = req.body;
//   const blogId = req.params.id;

//   try {
//     const blog = await Blog.findById(blogId);
//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     blog.title = title;
//     blog.content = content;
//     blog.image = image;
//     blog.category = category;

//     await blog.save();

//     return res.status(200).json({ blog });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error updating blog" });
//   }
// };

// export const getBlogById = async (req, res, next) => {
//   const id = req.params.id;

//   try {
//     const blog = await Blog.findById(id).populate("user");
//     if (!blog) {
//       return res.status(404).json({ message: "No blog found" });
//     }
//     return res.status(200).json({ blog });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error fetching blog" });
//   }
// };

// export const deleteBlog = async (req, res, next) => {
//   const blogId = req.params.id;

//   try {
//     const blog = await Blog.findByIdAndRemove(blogId).populate("user");
//     if (!blog) {
//       return res.status(404).json({ message: "Blog not found" });
//     }

//     await blog.user.blogs.pull(blog);
//     await blog.user.save();

//     return res.status(200).json({ message: "Blog deleted successfully" });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error deleting blog" });
//   }
// };

// export const getUserById = async (req, res, next) => {
//   const userId = req.params.id;

//   try {
//     const userBlogs = await User.findById(userId).populate("blogs");
//     if (!userBlogs) {
//       return res.status(404).json({ message: "User not found" });
//     }
//     return res.status(200).json({ user: userBlogs });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error fetching user blogs" });
//   }
// };

// // New functions for comments

// export const getCommentsByBlogId = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const comments = await Comment.find({ blog: id }).populate("user", "name");
//     if (!comments) {
//       return res.status(404).json({ message: "No comments found" });
//     }
//     return res.status(200).json({ comments });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error fetching comments" });
//   }
// };

// export const addCommentToBlog = async (req, res, next) => {
//   const { id } = req.params;
//   const { content, userId } = req.body;

//   try {
//     const existingUser = await User.findById(userId);
//     if (!existingUser) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     const comment = new Comment({
//       content,
//       user: userId,
//       blog: id,
//     });

//     await comment.save();

//     return res.status(201).json({ comment });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({ message: "Error adding comment" });
//   }
// };

import Blog from "../model/Blog.js";
import Comment from "../model/Comment.js";

// Fetch all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('user');
    return res.status(200).json({ blogs });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return res.status(500).json({ message: "Error fetching blogs" });
  }
};

// Add a new blog
export const addBlog = async (req, res) => {
  const { title, content, image, userId } = req.body;

  const blog = new Blog({
    title,
    content,
    image,
    user: userId,
  });

  try {
    await blog.save();
    return res.status(201).json({ blog });
  } catch (error) {
    console.error("Error creating blog:", error);
    return res.status(500).json({ message: "Error creating blog" });
  }
};

// Update an existing blog
export const updateBlog = async (req, res) => {
  const blogId = req.params.id;
  const { title, content, image } = req.body;

  try {
    const blog = await Blog.findByIdAndUpdate(
      blogId,
      { title, content, image },
      { new: true }
    );
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ message: "Error updating blog" });
  }
};

// Fetch a blog by ID
export const getBlogById = async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId).populate('user');
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ blog });
  } catch (error) {
    console.error("Error fetching blog:", error);
    return res.status(500).json({ message: "Error fetching blog" });
  }
};

// Delete a blog
export const deleteBlog = async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findByIdAndDelete(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    return res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    return res.status(500).json({ message: "Error deleting blog" });
  }
};

// Fetch comments for a blog
export const getCommentsByBlogId = async (req, res) => {
  const blogId = req.params.id;

  try {
    const comments = await Comment.find({ blog: blogId });
    return res.status(200).json({ comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return res.status(500).json({ message: "Error fetching comments" });
  }
};

// Add a comment to a blog
export const addCommentToBlog = async (req, res) => {
  const blogId = req.params.id;
  const { content, userId } = req.body;

  const comment = new Comment({
    content,
    user: userId,
    blog: blogId,
  });

  try {
    await comment.save();
    return res.status(201).json({ comment });
  } catch (error) {
    console.error("Error adding comment:", error);
    return res.status(500).json({ message: "Error adding comment" });
  }
};
