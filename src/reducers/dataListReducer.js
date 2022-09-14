import { ADD_ITEM, DELETE_ITEM, EDIT_ITEM } from "../actions/dataListActions";
import { v4 as uuid } from "uuid";
const data = [
  {
    id: uuid(),
    fullName: "Ashfaque",
    age: "24",
    email: "ashfaque@gmail.com",
    phoneNumber: "7411467611",
  },
  {
    id: uuid(),
    fullName: "Roman Reigns",
    age: "35",
    email: "romanreigns@gmail.com",
    phoneNumber: "9242000000",
  },
];
export const dataListReducer = (
  state = {
    data: data,
  },
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      const newData = action.payload;
      return { ...state, data: [...state.data, newData] };
    case DELETE_ITEM:
      const filteredData = state.data.filter((singleItem) => {
        return singleItem.id !== action.payload;
      });
      return { ...state, data: [...filteredData] };
    case EDIT_ITEM:
      const foundItem = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[foundItem] = {
        ...state.data[foundItem],
        fullName: action.payload.fullName,
        age: action.payload.age,
        email: action.payload.email,
        phoneNumber: action.payload.phoneNumber,
      };
      return { ...state, data: [...state.data] };
    default:
      return state;
  }
};
