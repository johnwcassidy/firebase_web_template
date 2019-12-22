const initialState = {
  menuToggled: false,
  profileToggled: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return {
        ...state,
        menuToggled: !state.menuToggled,
        profileToggled: false
      };
    case 'TOGGLE_PROFILE':
      return {
        ...state,
        profileToggled: !state.profileToggled,
        menuToggled: false
      };
    case 'RESET_NAVIGATION':
      return initialState;
    default:
      return state;
  }
};
