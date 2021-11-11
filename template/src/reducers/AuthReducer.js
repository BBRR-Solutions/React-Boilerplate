const AuthReducer = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      return (state = action.payload);
    case "LOGOFF":
      return (state = null);
    default:
      return state;
  }
};

export default AuthReducer;
