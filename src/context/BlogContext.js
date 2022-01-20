import React, { useState } from 'react';

const BlogContext = React.createContext();

//named export import with { BlogProvider }
export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  return (
    //All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

//vanilla explanation for above
// let blogs = [];

// const addBlogs = () => {
//   blogs = [...blogs, { title: 'blog test 1' }];
//   blogs = [...blogs, { title: 'blog test 2' }];
//   blogs = [...blogs, { title: 'blog test 3' }];

// };
// addBlogs();
// console.log(blogs);