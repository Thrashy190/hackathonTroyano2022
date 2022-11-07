import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { FaMapMarkerAlt } from "react-icons/fa";
// import { useAuth } from "../../contexts/authContext";

function Li(props) {
  const underline = props.on ? "underline" : "";
  const content = props.button ? (
    <Button variant="contained" color="neutral">
      {props.label}
    </Button>
  ) : (
    props.label
  );
  return (
    <li
      className={`text-white list-none inline-block mx-5 hover:text-indigo-900`}
    >
      <NavLink to={props.to}>{content}</NavLink>
    </li>
  );
}

function Nav() {
  let logged = false;
  const [log, setLogged] = useState(logged);

  fetch(
    "https://securetoken.googleapis.com/v1/token?key=AIzaSyAivt1eo738_e4s4tSdrvh8ovBhZcNMmK8",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        grant_type: "refresh_token",
        refresh_token: localStorage.getItem("key"),
      }),
    }
  )
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      if (data.id_token != undefined) {
        setLogged(true);
      }
    });

  const lis = [
    { title: "Foros", on: true, button: false, to: "/foros" },
    { title: "Universidades", on: false, button: false, to: "/universidades" },
    { title: "Registro", on: false, button: true, to: "/login" },
    { title: "Inicio de Sesión", on: false, button: false, to: "/login" },
  ];

  const lisActiveUser = [
    { title: "Foros", on: true, button: false, to: "/foros" },
    { title: "Universidades", on: false, button: false, to: "/universidades" },
    { title: "Perfil", on: false, button: true, to: "/perfil" },
  ];

  return (
    <nav className="w-full h-20 bg-indigo-600 flex justify-around items-center">
      <Link to={"/"}>
        <div className="text-white mr-3">
          <FaMapMarkerAlt size={40} />
        </div>
      </Link>

      {log === false ? (
        <ul className="w-3/4 flex justify-end items-center">
          {lis.map((li, i) => {
            return (
              <Li
                label={li.title}
                on={li.on}
                button={li.button}
                to={li.to}
                key={`li-${i}`}
              />
            );
          })}
        </ul>
      ) : (
        <ul className="w-3/4 flex justify-end items-center">
          {lisActiveUser.map((li, i) => {
            return (
              <Li
                label={li.title}
                on={li.on}
                button={li.button}
                to={li.to}
                key={`li-${i}`}
              />
            );
          })}
        </ul>
      )}
    </nav>
  );
}

export default Nav;
