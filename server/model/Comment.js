
// import mongoose from "mongoose";

// const commentSchema = new mongoose.Schema({
//   content: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog", required: true },
//   createdAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("Comment", commentSchema);

// models/Comment.js


import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  blog: {
    type: mongoose.Types.ObjectId,
    ref: 'Blog',
    required: true,
  },
}, { timestamps: true });

export default mongoose.model('Comment', commentSchema);
