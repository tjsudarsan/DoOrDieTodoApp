const defaultState = {
  userId: "",
  token: "",
  userDetails: null
};

const AuthReducer = (state = defaultState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default AuthReducer;
