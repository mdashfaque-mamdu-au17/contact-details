import React from "react";
import { TrashSimple, Pencil } from "phosphor-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { OPEN_POPUP } from "../actions/popUpActions";
import { EDITING } from "../actions/EditActions";

const SingleContact = ({ id, fullName, phoneNumber, age, email }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch({ type: OPEN_POPUP, payload: id });
  };

  const editHandler = (id) => {
    dispatch({ type: EDITING, payload: id });
  };
  return (
    <div className="bg-teal-100 px-2 mt-4 py-2 rounded-md flex flex-col gap-4 sm:px-10">
      <div className="text-violet-800">
        <div className="">
          <h2>Name: {fullName}</h2>
          <p>age: {age}</p>
        </div>
        <div>
          <p>email: {email}</p>
          <p>phone: {phoneNumber}</p>
        </div>
      </div>
      <div className="flex justify-between">
        <Link
          className="px-2 hover:cursor-pointer"
          onClick={() => editHandler(id)}
          to={`/addcontact/${id}`}
        >
          <Pencil size={22} className="text-gray-900" weight="fill" />
        </Link>
        <button
          className="px-2 hover:cursor-pointer"
          onClick={() => deleteHandler(id)}
        >
          <TrashSimple size={22} className="text-red-900" weight="fill" />
        </button>
      </div>
    </div>
  );
};

export default SingleContact;
