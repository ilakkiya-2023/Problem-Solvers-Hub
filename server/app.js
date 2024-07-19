// // import express from "express";
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";
// // import blogRouter from "./routes/blog-routes.js";
// // import router from "./routes/user-routes.js";
// // import cors from "cors";

// // dotenv.config();
// // const app = express();
// // app.use(cors());
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // app.use("/api/user", router);
// // app.use("/api/blog", blogRouter);

// // const PORT = process.env.PORT || 8000;

// // mongoose
// //   .connect(process.env.DATABASE_URL)
// //   .then(() => app.listen(PORT))
// //   .then(() =>
// //     console.log(`Connected To Database and listening at PORT ${PORT}`)
// //   )
// //   .catch((err) => console.log(err));

  
// // app.js
// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import blogRouter from "./routes/blog-routes.js";
// import userRouter from "./routes/user-routes.js";
// import cors from "cors";

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/user", userRouter);
// app.use("/api/blog", blogRouter);

// const PORT = process.env.PORT || 8000;

// mongoose
//   .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => app.listen(PORT))
//   .then(() => console.log(`Connected to database and listening at PORT ${PORT}`))
//   .catch((err) => console.log(err));

// app.js

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import blogRouter from "./routes/blog-routes.js";
import userRouter from "./routes/user-routes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT))
  .then(() => console.log(`Connected to database and listening at PORT ${PORT}`))
  .catch((err) => console.log(err));


// app.js

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import blogRouter from "./routes/blog-routes.js";
// import userRouter from "./routes/user-routes.js";
// import cors from "cors";

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Use Routes
// app.use("/api/user", userRouter);
// app.use("/api/blog", blogRouter);

// const PORT = process.env.PORT || 8000;

// mongoose
//   .connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Connected to database and listening at PORT ${PORT}`);
//     });
//   })
//   .catch((err) => console.error("Database connection error:", err));
