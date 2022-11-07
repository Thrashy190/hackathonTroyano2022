import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Components/Shared/nav";
import Button from "@mui/material/Button";
import { FaSearch } from "react-icons/fa";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

function Clect(props) {
  return (
    // </select>
    <div className="my-6 w-full flex justify-center">
      <FormControl sx={{ width: "80%" }} variant="outlined">
        <InputLabel id="demo-simple-select-label">{props.def}</InputLabel>
        <Select
          label={props.def}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={props.handler}
          name={props.def[0].toLowerCase()}
        >
          {props.options.map((option, i) => {
            return (
              <MenuItem value={option} key={`option-${i}`}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}

function Search(props) {
  return (
    <div className="h-12 w-full flex justify-start">
      <div className="h-12 w-12 flex justify-center items-end mr-4 text-indigo-600">
        <FaSearch size={25} />
      </div>
      <TextField
        sx={{ width: "66%" }}
        id="input-with-sx"
        label="Buscar"
        variant="standard"
        onChange={props.handler}
      />
    </div>
  );
}

function ForumElement(props) {
  return (
    <Link
      className="h-40 w-full my-5 border-2 border-gray-400 rounded-xl p-5"
      to="/mensajes"
    >
      <h1 className="text-3xl text-indigo-900 mb-2">{props.info.title}</h1>
      <div className="grid grid-cols-[66%_33%] grid-rows-1 text-indigo-900 font-bold">
        <div>
          <h2>Universidad: {props.info.u}</h2>
          <h2>Carrera: {props.info.c}</h2>
          <h2>Asignatura: {props.info.a}</h2>
        </div>
        <div>
          <h2>Última interacción: {props.info.lI}</h2>
          <h2>Respuestas: {props.info.r}</h2>
        </div>
      </div>
    </Link>
  );
}

function Foro(props) {
  const selects = [
    { def: "Universidad", options: ["UAQ", "ITS", "UNAM"] },
    { def: "Carrera", options: ["Informática", "Mecatrónica", "Sistemas"] },
    { def: "Asignatura", options: ["Mate", "Ciencias", "Progra"] },
  ];

  const fE = [
    { title: "ola", u: "UAQ", c: "Informática", a: "Progra", lI: "3h", r: 23 },
    {
      title: "hola",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
      lI: "4h30",
      r: 2,
    },
    {
      title: "tengo una question",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
      lI: "5h",
      r: 75,
    },
    {
      title: "tengo esta pregunta",
      u: "ITS",
      c: "Informática",
      a: "Progra",
      lI: "6h30",
      r: 34,
    },
    {
      title: "aliens en la uaq?",
      u: "ITS",
      c: "Informática",
      a: "Ciencias",
      lI: "7h",
      r: 92,
    },
    {
      title: "profe dieGOD",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
      lI: "8h",
      r: 223,
    },
  ];

  const [res, setRes] = useState(fE);

  function handleChange(e) {
    console.log(e.target.value);
    setRes(
      fE.filter((el) =>
        el.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  }

  function handleFilter(e) {
    setRes(fE.filter((el) => el[e.target.name].includes(e.target.value)));
  }

  return (
    <div className="w-full h-full flex bg-white flex-col">
      <Nav />
      <div className="mx-10 my-5 grid grid-cols-[66%_33%] grid-rows-1 h-full">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-indigo-900 mb-10">
            ¿Sobre que te gustaría hablar hoy?
          </h1>
          <div className="w-full">
            <Search handler={handleChange} />
            <div className="p-5 flex justify-center items-center flex-col">
              {res.map((info, i) => {
                return <ForumElement info={info} key={`key-${i}`} />;
              })}
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-400 rounded-xl flex justify-center items-center flex-col h-[30rem]">
          <h1 className="text-4xl font-bold text-indigo-900">Filtros</h1>
          {selects.map((select, i) => {
            return (
              <Clect
                def={select.def}
                options={select.options}
                key={`select-${i}`}
                handler={handleFilter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Foro;
