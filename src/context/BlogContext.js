import React from 'react';

const BlogContext = React.createContext();

//named export import with { BlogProvider }
export const BlogProvider = ({ children }) => {
  return (
    <BlogContext.Provider value={[1, 2, 3]}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
