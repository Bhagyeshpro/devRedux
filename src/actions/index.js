export const increment = (num) => {
  return {
    type: "INCREMENT",
    payLoad: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const logOut = () => {
  return {
    type: "LOGOUT",
  };
};
