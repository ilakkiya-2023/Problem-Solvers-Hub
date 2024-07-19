// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Blog from "./Blog";

// function Blogs() {
//   const [blogs, setBlogs] = useState();
//   const sendRequest = async () => {
//     const res = await axios
//       .get("http://localhost:3001/api/blog")
//       .catch((err) => console.log(err));

//     const data = await res.data;
//     return data;
//   };

//   useEffect(() => {
//     sendRequest().then((data) => setBlogs(data.blogs));
//   }, []);

//   return (
//     <div>
//       {blogs &&
//         blogs.map((blog, index) => (
//           <Blog
//             key={blog._id} // Added key prop for React list rendering
//             id={blog._id}
//             isUser={localStorage.getItem("userId") === blog.user._id}
//             title={blog.title}
//             content={blog.content}
//             image={blog.image}
//             category={blog.category} // Added category prop
//             userName={blog.user.name}
//           />
//         ))}
//     </div>
//   );
// }

// export default Blogs;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Blog from "./Blog";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);

//   const sendRequest = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/blog");
//       const data = await res.data;
//       setBlogs(data.blogs || []);
//     } catch (err) {
//       setError("Error fetching blogs");
//     }
//   };

//   useEffect(() => {
//     sendRequest();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {blogs.map((blog) => (
//         <Blog
//           key={blog._id} // Added key prop for React list rendering
//           id={blog._id}
//           title={blog.title}
//           content={blog.content}
//           image={blog.image}
//           userName={blog.user.name}
//         />
//       ))}
//     </div>
//   );
// }

// export default Blogs;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Blog from "./Blog";
// import { TextField, Box, Typography } from "@mui/material";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchCategory, setSearchCategory] = useState("");

//   const sendRequest = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/blog");
//       const data = await res.data;
//       setBlogs(data.blogs || []);
//     } catch (err) {
//       setError("Error fetching blogs");
//     }
//   };

//   useEffect(() => {
//     sendRequest();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchCategory(event.target.value);
//   };

//   const filteredBlogs = blogs.filter((blog) =>
//     blog.category.toLowerCase().includes(searchCategory.toLowerCase())
//   );

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Search here..
//       </Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
//         <TextField
//           label="Search by Category"
//           variant="outlined"
//           value={searchCategory}
//           onChange={handleSearchChange}
//           sx={{ width: '50%' }}
//         />
//       </Box>
//       {error && <Typography color="error">{error}</Typography>}
//       {filteredBlogs.map((blog) => (
//         <Blog
//           key={blog._id}
//           id={blog._id}
//           title={blog.title}
//           content={blog.content}
//           image={blog.image}
//           userName={blog.user.name}
//           isUser={localStorage.getItem("userId") === blog.user._id}
//         />
//       ))}
//     </Box>
//   );
// }

// export default Blogs;


// components/Blogs.js

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Blog from "./Blog";
// import { TextField, Box, Typography } from "@mui/material";

// function Blogs() {
//   const [blogs, setBlogs] = useState([]);
//   const [error, setError] = useState(null);
//   const [searchCategory, setSearchCategory] = useState("");

//   const sendRequest = async () => {
//     try {
//       const res = await axios.get("http://localhost:3001/api/blog");
//       const data = await res.data;
//       setBlogs(data.blogs || []);
//     } catch (err) {
//       setError("Error fetching blogs");
//     }
//   };

//   useEffect(() => {
//     sendRequest();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchCategory(event.target.value);
//   };

//   const filteredBlogs = blogs.filter((blog) =>
//     blog.category.toLowerCase().includes(searchCategory.toLowerCase())
//   );

//   return (
//     <Box sx={{ padding: 3 }}>
//       <Typography variant="h4" align="center" gutterBottom>Search here..</Typography>
//       <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
//         <TextField
//           label="Search by Category"
//           variant="outlined"
//           value={searchCategory}
//           onChange={handleSearchChange}
//           sx={{ width: '50%' }}
//         />
//       </Box>
//       {error && <Typography color="error">{error}</Typography>}
//       {filteredBlogs.map((blog) => (
//         <Blog
//           key={blog._id}
//           id={blog._id}
//           title={blog.title}
//           content={blog.content}
//           image={blog.image}
//           userName={blog.user.name}
//           isUser={localStorage.getItem("userId") === blog.user._id}
//         />
//       ))}
//     </Box>
//   );
// }

// export default Blogs;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import { TextField, Box, Typography } from "@mui/material";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [searchCategory, setSearchCategory] = useState("");

  const sendRequest = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/blog");
      setBlogs(res.data.blogs || []);
    } catch (err) {
      setError("Error fetching blogs");
    }
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const handleSearchChange = (event) => {
    setSearchCategory(event.target.value);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.category.toLowerCase().includes(searchCategory.toLowerCase())
  );

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Search here..
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
        <TextField
          label="Search by Category"
          variant="outlined"
          value={searchCategory}
          onChange={handleSearchChange}
          sx={{ width: '50%' }}
        />
      </Box>
      {error && <Typography color="error">{error}</Typography>}
      {filteredBlogs.map((blog) => (
        <Blog
          key={blog._id}
          id={blog._id}
          title={blog.title}
          content={blog.content}
          image={blog.image}
          userName={blog.user.name}
          isUser={localStorage.getItem("userId") === blog.user._id}
        />
      ))}
    </Box>
  );
}

export default Blogs;
