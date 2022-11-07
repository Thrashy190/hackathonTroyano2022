import React from "react";
import ReactDOM from "react-dom";
//import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./index.css";
import Foro from "./Pages/Foro/foro.js";
import LandingPage from "./Pages/LandingPage/LandingPage.js";
import User from "./Pages/User/perfil.js";
import Config from "./Pages/User/config.js";
import Login from "./Pages/Login/Login";
import MessagesForum from "./Pages/Foro/MessageForum";
import RoadMap from "./Pages/RoadMap/RoadMapPage";
import Universidades from "./Pages/Listas/universidades.js";
import NM from "./Pages/Otros/404.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5D6BE4",
    },
    secondary: {
      main: "#3B3D78",
    },
    neutral: {
      main: "#ffffff",
      contrastText: "#5D6BE4",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/foros" element={<Foro />} />
        <Route path="/universidades" element={<Universidades />} />
        <Route path="/mensajes" element={<MessagesForum />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrar" element={<Login />} />
        <Route path="/perfil" element={<User />} />
        <Route path="/config" element={<Config />} />
        <Route path="*" element={<NM />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
