import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import SingleContact from "../components/SingleContact";
import PopUp from "../components/PopUp";
import { NOT_EDITING } from "../actions/EditActions";

const HomePage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    dataList: { data },
  } = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: NOT_EDITING });
  }, []);

  return (
    <div className="mt-16">
      <div className="container pt-8 px-4 mx-auto md:max-w-2xl">
        {state.popUpData.popUp && <PopUp />}
        <Link
          to="addcontact"
          className="bg-green-500 px-4 py-2 rounded-md text-white hover:cursor-pointer hover:bg-green-600"
        >
          Add Contact
        </Link>
        {data.map((contact) => {
          return <SingleContact key={contact.id} {...contact} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
