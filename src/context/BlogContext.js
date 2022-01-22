import createDataContext from "./createDataContext";

//initial state is second arg from useReducer
const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};
const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "add_blogpost" });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);

// const addPotato = (send) => {
//   send("POTATO SENT");
// };

// const potatoContext = (actions) => {
//   const send = (input) => {
//     console.log("FROM CONTEXT:", input);
//   };
//   const boundActions = {};
//   for (let key in actions) {
//     boundActions[key] = actions[key](send);
   
//   }
// };

// potatoContext({ addPotato });
