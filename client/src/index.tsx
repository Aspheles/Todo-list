import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter} from "react-router-dom";
import {NavRouter} from "./components/NavRouter";
import {Toaster} from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Toaster position="bottom-right" reverseOrder={true} />
    <NavRouter />
    </BrowserRouter>

  </React.StrictMode>
);
