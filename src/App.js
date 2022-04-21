import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginSignupTemplate from "./templates/LoginSignupTemplate";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<LoginSignupTemplate />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
