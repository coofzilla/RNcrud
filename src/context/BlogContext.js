import React, { useReducer } from 'react';

const BlogContext = React.createContext();

//initial state is second arg from useReducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

//named export import with { BlogProvider }
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return (
    //All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;

//vanilla
// let blogs = [];

// const addBlogs = () => {
//   blogs = [...blogs, { title: 'blog test 1' }];
//   blogs = [...blogs, { title: 'blog test 2' }];
//   blogs = [...blogs, { title: 'blog test 3' }];

// };
// addBlogs();
// console.log(blogs);
