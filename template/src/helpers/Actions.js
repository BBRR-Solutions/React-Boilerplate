export const LoginUser = (data) => ({
  type: "LOGIN",
  payload: data,
});

export const LogOffUser = {
  type: "LOGOFF",
};

export const Increment = {
  type: "INCREMENT",
};

export const Decrement = {
  type: "DECREMENT",
};
