import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Index from "../Contents";
import Challenge1 from "../page/Challenge1";
import Challenge2 from "../page/Challenge2";
import Challenge3 from "../page/Challenge3";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Challenge1 />,
      },
      {
        path: "/challenge2",
        element: <Challenge2 />,
      },
      {
        path: "/challenge3",
        element: <Challenge3 />,
      },
    ],
  },
]);
