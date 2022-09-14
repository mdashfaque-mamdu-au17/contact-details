import { EDITING, NOT_EDITING } from "../actions/EditActions";

export const editReducer = (
  state = { isEditing: false, editingId: "" },
  action
) => {
  switch (action.type) {
    case EDITING:
      return { ...state, isEditing: true, editingId: action.payload };
    case NOT_EDITING:
      return { ...state, isEditing: false, editingId: "" };
    default:
      return state;
  }
};
