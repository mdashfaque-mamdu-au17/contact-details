import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddContact from "./pages/AddContact";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/addcontact/:id" element={<AddContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// Routing, 1. Home page, add contact page. ? Done!
// Styling UI 1) Home page, 2) add contact page. ? Done!
// Validation in add contact page! ? Done!
// save the added contact in state using Redux ? !Done
// pop up UI to confirm if user wants to delete contact. ? !Done
// Redux setup! ? !Done
// delete and edit functionality ? !Done
