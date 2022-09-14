import React from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { ADD_ITEM, EDIT_ITEM } from "../actions/dataListActions";
import { v4 as uuid } from "uuid";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const AddContact = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    dataList: { data },
  } = useSelector((state) => state);

  const {
    editItem: { isEditing, editingId },
  } = useSelector((state) => state);

  const editingItem = isEditing ? data.find((item) => item.id === id) : null;

  const formik = useFormik({
    initialValues: {
      fullName: editingItem ? editingItem.fullName : "",
      phoneNumber: editingItem ? editingItem.phoneNumber : "",
      age: editingItem ? editingItem.age : "",
      email: editingItem ? editingItem.email : "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "Must be atleast 5 characters long")
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required"),
      age: Yup.number()
        .positive("Age cannot be negative")
        .typeError("Age should be in numbers")
        .max(100, "Cannot be older then 100 years")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      if (editingItem) {
        dispatch({ type: EDIT_ITEM, payload: { id: editingId, ...values } });
        navigate("/");
      } else {
        dispatch({ type: ADD_ITEM, payload: { id: uuid(), ...values } });
        navigate("/");
      }
    },
  });

  return (
    <div className="flex h-screen">
      <div className="container  px-4 m-auto max-w-lg">
        <h3 className="text-orange-600 text-center text-2xl uppercase mb-4">
          {isEditing ? "edit" : "add"} your contact details
        </h3>
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div className="">
            <label htmlFor="fullName"></label>
            <input
              id="fullName"
              type="text"
              placeholder="John Doe"
              {...formik.getFieldProps("fullName")}
              className="w-full pl-3 py-3 text-sm text-gray-700 bg-white border-solid border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="pl-2 pt-1 text-sm text-red-500">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>

          <div>
            <label htmlFor="phoneNumber"></label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="9242606760"
              {...formik.getFieldProps("phoneNumber")}
              className="w-full pl-3 py-3 text-sm text-gray-700 bg-white border-solid border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="pl-2 pt-1 text-sm text-red-500">
                {formik.errors.phoneNumber}
              </div>
            ) : null}
          </div>

          <div>
            <label htmlFor="age"></label>
            <input
              id="age"
              type="text"
              placeholder="24"
              {...formik.getFieldProps("age")}
              className="w-full pl-3 py-3 text-sm text-gray-700 bg-white border-solid border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
            />
            {formik.touched.age && formik.errors.age ? (
              <div className="pl-2 pt-1 text-sm text-red-500">
                {formik.errors.age}
              </div>
            ) : null}
          </div>

          <div>
            <label htmlFor="email"></label>
            <input
              id="email"
              type="email"
              placeholder="johnDoe@example.com"
              {...formik.getFieldProps("email")}
              className="w-full pl-3 py-3 text-sm text-gray-700 bg-white border-solid border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-600"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="pl-2 pt-1 text-sm text-red-500">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          {isEditing ? (
            <button
              type="submit"
              className="w-full bg-green-500 py-3 rounded-md text-white hover:bg-green-600 uppercase"
            >
              edit
            </button>
          ) : (
            <button
              type="submit"
              className="w-full bg-green-500 py-3 rounded-md text-white hover:bg-green-600 uppercase"
            >
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddContact;
