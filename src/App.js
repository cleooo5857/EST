import "./App.css";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/routers";

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
