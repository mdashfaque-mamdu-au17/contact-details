import { OPEN_POPUP, CLOSE_POPUP } from "../actions/popUpActions";

export const popupReducer = (state = { popUp: false, id: "" }, action) => {
  switch (action.type) {
    case OPEN_POPUP:
      console.log(action.payload);
      console.log(state);
      return { ...state, popUp: true, id: action.payload };
    case CLOSE_POPUP:
      return { ...state, popUp: false, id: "" };
    default:
      return state;
  }
};
