import React from "react";
import Page from "./Layouts/Page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Free from "./Routes/Free";
import Login from "./Routes/Login";

function App() {
  return (
    <div className="App font-InterVariable ">
      <Router>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/free" element={<Free />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
