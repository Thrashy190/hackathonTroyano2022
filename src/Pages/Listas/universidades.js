import React, { useState, useEffect } from "react";
import Nav from "../../Components/Shared/nav";
import Button from "@mui/material/Button";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import { obtenerUniversidadesAsync } from "../../services/universidadesService";
import { obtenerCarrerasAsync } from "../../services/carrerasService";

function ModalLi(props) {
  return (
    <li className="h-16 w-56 text-indigo-900 font-medium border-b-2 border-gray-300 text-center">
      {props.career}
    </li>
  );
}

function ModalTableEl(props) {
  return (
    <div className="flex justify-center h-16 text-indigo-900 font-medium">
      <h2>{props.children}</h2>
    </div>
  );
}

function Clect(props) {
  return (
    <FormControl sx={{ width: "24rem" }} variant="standard">
      <InputLabel id="demo-simple-select-label">{props.def}</InputLabel>
      <Select labelId="demo-simple-select-label" id="demo-simple-select">
        {props.options.map((option, i) => {
          return (
            <MenuItem value={option} key={`option-${i}`}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

function Universidades(props) {
  const selects = [
    { def: "Universidad", options: ["UAQ", "UNAM", "ETC"] },
    { def: "Carrera", options: ["Carrera X", "Carrera X", "Carrera X"] },
  ];

  // const carreras = ['Carrera X', 'Carrera X', 'Carrera X', 'Carrera X', 'Carrera X', 'Carrera X'];
  const [carreras, setCarreras] = useState([]);
  const [universidades, setUniversidades] = useState([]);
  const [hidden, setHidden] = useState(false);

  const handleChange = async (universidadId) => {
    hidden ? setHidden(false) : setHidden(true);
    const response = await obtenerCarrerasAsync(universidadId);
    setCarreras(response.ok ? response.data : []);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 6,
  };

  useEffect(async () => {
    const response = await obtenerUniversidadesAsync();
    setUniversidades(response.ok ? response.data : []);
  }, []);

  return (
    <div className="w-full h-full flex bg-white flex-col overflow-x-hidden">
      <Nav />
      <div className="flex items-center flex-col">
        <div className="w-[80%] h-16 border-[1px] border-gray-400 mt-4 rounded-xl flex justify-around items-center">
          <Clect def={selects[0].def} options={selects[0].options} />
          <Clect def={selects[1].def} options={selects[1].options} />
          <Button variant="contained" color="primary">
            Buscar
          </Button>
        </div>
        <div className="w-[80%] h-full mt-4">
          <div className="grid grid-cols-5 grid-rows-3 gap-6 mb-6">
            {universidades.map((uni, i) => {
              return (
                <div
                  className="flex justify-center items-center relative rounded-md cursor-pointer"
                  key={`uni-${i}`}
                  onClick={(e) => handleChange(uni.id)}
                >
                  <img
                    className="rounded-md brightness-50 h-full"
                    src={uni.imgCover}
                  />
                  <h1 className="text-white absolute text-center font-bold">
                    {uni.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        <Modal open={hidden} onClose={handleChange}>
          <Box sx={style}>
            <div className="grid grid-cols-2 bg-white rounded-xl">
              <div className="flex justify-center items-center mr-6">
                <ul>
                  {carreras.map((carrera, i) => {
                    // return <ModalLi career={carrera.name} key={`key-${i}`} />
                    return (
                      <li className="mb-4  text-indigo-600 font-bold">
                        <Link to={`/roadmap?id=${carrera.id}`} key={`key-${i}`}>
                          {carrera.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="border-2 border-gray-400 rounded-2xl flex items-center flex-col relative">
                <h1 className="text-indigo-900 font-bold text-3xl">
                  Carrera X
                </h1>
                <div className="w-[80%] grid grid-cols-2 grid-rows-4 mt-12">
                  <ModalTableEl># periodos</ModalTableEl>
                  <ModalTableEl>9</ModalTableEl>
                  <ModalTableEl># de usuarios</ModalTableEl>
                  <ModalTableEl>245</ModalTableEl>
                  <ModalTableEl>Recursos</ModalTableEl>
                  <ModalTableEl>56</ModalTableEl>
                  <ModalTableEl>Foro</ModalTableEl>
                  <ModalTableEl>UAQ</ModalTableEl>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default Universidades;
