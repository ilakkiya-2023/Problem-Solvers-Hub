// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Blog from "./Blog";

// function UserBlogs() {
//   const [user, setUser] = useState();
//   const id = localStorage.getItem("userId");

//   const sendRequest = async () => {
//     const res = await axios
//       .get(`http://localhost:3001/api/blog/user/${id}`)
//       .catch((err) => console.log(err));

//     const data = await res.data;
//     return data;
//   };

//   useEffect(() => {
//     sendRequest().then((data) => setUser(data.user));
//   }, []);

//   return (
//     <div>
//       {user &&
//         user.blogs &&
//         user.blogs.map((blog) => (
//           <Blog
//             key={blog._id}
//             id={blog._id}
//             isUser={true}
//             title={blog.title}
//             content={blog.content}
//             image={blog.image}
//             category={blog.category} // Added category prop
//             userName={user.name}
//           />
//         ))}
//     </div>
//   );
// }

// export default UserBlogs;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

function UserBlogs() {
  const [user, setUser] = useState(null);
  const id = localStorage.getItem("userId");

  const sendRequest = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/api/blog/user/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);

  return (
    <div>
      {user &&
        user.blogs &&
        user.blogs.map((blog) => (
          <Blog
            key={blog._id}
            id={blog._id}
            isUser={true}
            title={blog.title}
            content={blog.content}
            image={blog.image}
            userName={user.name}
          />
        ))}
    </div>
  );
}

export default UserBlogs;
