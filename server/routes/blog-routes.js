
// import express from "express";
// import {
//   getAllBlogs,
//   addBlog,
//   updateBlog,
//   getBlogById,
//   deleteBlog,
//   getUserById,
// } from "../controllers/blog-controller.js";
// import {
//   addCommentToBlog,
//   getCommentsByBlogId,
// } from "../controllers/comment-controller.js"; // Ensure no duplicate imports

// const router = express.Router();

// router.get("/", getAllBlogs);
// router.post("/", addBlog);
// router.put("/:id", updateBlog);
// router.get("/:id", getBlogById);
// router.delete("/:id", deleteBlog);
// router.get("/user/:id", getUserById);

// // Routes for comments
// router.get("/:id/comments", getCommentsByBlogId);
// router.post("/:id/comments", addCommentToBlog);

// export default router;

// routes/blog-routes.js


// import express from "express";
// import { getCommentsByBlogId, addCommentToBlog } from "../controllers/blog-controller.js";

// const router = express.Router();

// router.get("/api/blog/:id/comments", getCommentsByBlogId);
// router.post("/api/blog/:id/comments", addCommentToBlog);

// export default router;


// import express from "express";
// import {
//   getAllBlogs,
//   addBlog,
//   updateBlog,
//   getBlogById,
//   deleteBlog,
//   getCommentsByBlogId,
//   addCommentToBlog
// } from "../controllers/blog-controller.js";

// const router = express.Router();

// router.get("/", getAllBlogs);
// router.post("/", addBlog);
// router.put("/:id", updateBlog);
// router.get("/:id", getBlogById);
// router.delete("/:id", deleteBlog);

// // Routes for comments
// router.get("/:id/comments", getCommentsByBlogId);
// router.post("/:id/comments", addCommentToBlog);

// export default router;


// blog-routes.js
import express from "express";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  getBlogById,
  deleteBlog,
  getCommentsByBlogId,
  addCommentToBlog
} from "../controllers/blog-controller.js";

const router = express.Router();

router.get("/", getAllBlogs);
router.post("/", addBlog);
router.put("/:id", updateBlog);
router.get("/:id", getBlogById);
router.delete("/:id", deleteBlog);

// Routes for comments
router.get("/:id/comments", getCommentsByBlogId);
router.post("/:id/comments", addCommentToBlog);

export default router;
