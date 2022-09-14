import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./components/Navbar";
import {BrowserRouter} from "react-router-dom";
import {NavRouter} from "./components/NavRouter";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <NavRouter />
    </BrowserRouter>

  </React.StrictMode>
);
