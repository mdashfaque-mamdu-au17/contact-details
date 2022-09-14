import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM } from "../actions/dataListActions";
import { CLOSE_POPUP } from "../actions/popUpActions";

const PopUp = () => {
  const dispatch = useDispatch();
  const {
    popUpData: { id },
  } = useSelector((state) => state);

  const closePopUp = (id) => {
    dispatch({ type: CLOSE_POPUP, payload: id });
  };
  const deleteHandler = (id) => {
    dispatch({ type: DELETE_ITEM, payload: id });
    dispatch({ type: CLOSE_POPUP });
  };
  return (
    <div className="border-2 mb-4 rounded-md py-4">
      <div className="">
        <h2 className="text-center mb-2 uppercase">Are you sure ?</h2>
        <div className="flex justify-around gap-6">
          <button
            className="bg-gray-200 px-3 py-2 rounded-md hover:cursor-pointer "
            onClick={() => closePopUp(id)}
          >
            cancel
          </button>
          <button
            className="bg-red-600 px-3 py-2 rounded-md hover:cursor-pointer text-white"
            onClick={() => deleteHandler(id)}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
