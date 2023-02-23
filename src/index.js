import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Global/Header';
import ErrorPage from './pages/ErrorPage';
import DarkMode from './pages/DarkModePage';
import { DarkModeProvider } from './context/DarkModeContext';
import Layout from './layouts/DefaultLayout';
import SearchPage from './pages/SearchPage';
import SingleBook from './pages/SingleBook';
//All pages go here
const router = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  errorElement: <ErrorPage />,
    children: [
      {
        path: "darkmode",
        element: <DarkMode />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "books/:id",
        element: <SingleBook/>,
      },
    ]
}
])
/**
 * Note, if you wanted to have a dark mode across the app, you can place it on inside the index page, 
 * instead of around the route element.
 */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <RouterProvider router={router} /> 
    </DarkModeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
