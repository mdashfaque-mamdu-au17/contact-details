import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { dataListReducer } from "./reducers/dataListReducer";
import { popupReducer } from "./reducers/popupReducer";
import { editReducer } from "./reducers/editReducer";
import thunk from "redux-thunk";
import { v4 as uuid } from "uuid";

const initialState = {
  data: [
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
  ],
};

const reducer = combineReducers({
  dataList: dataListReducer,
  popUpData: popupReducer,
  editItem: editReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
