const loggedReducer = (state = true, action) => {
  switch (action.type) {
    case "LogIn":
      return !state;
    case "LOGOUT":
      return (state = false);
    default:
      return state;
  }
};

export default loggedReducer;
