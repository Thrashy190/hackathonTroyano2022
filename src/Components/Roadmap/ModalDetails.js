import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function TableElement(props) {
  return (
    <div className="mb-4">
      <h1 className="text-indigo-900 font-bold text-2xl">{props.src.title}</h1>
      <h2 className="text-indigo-600 font-medium">
        <a href={props.src.href}>{props.src.href}</a>
      </h2>
    </div>
  );
}

const srcs = [
  { title: "Introducción", href: "https://ciscoacademy/introduccion.html" },
  { title: "Redes I", href: "https://ciscoacademy/redes.html" },
  {
    title: "¿Qué son las redes?",
    href: "https://ciscoacademy/que-son-las-redes.html",
  },
  {
    title: "¿Qué es un router?",
    href: "https://ciscoacademy/que-es-un-router.html",
  },
];

const ModalDetails = (props) => {
  const { open, setOpen } = props;
  const handleClose = () => setOpen(false);

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={modalStyle}>
        <div className="bg-white">
          <h1 className="text-3xl text-indigo-900 mb-4 font-medium">Redes I</h1>
          <h2>
            Una red informática, una red de comunicaciones de datos o una red de
            computadoras es la interconexión de distinto número de sistemas
            informáticos a través de una serie de dispositivos de
            telecomunicaciones y un medio físico (alámbrico o inalámbrico).
          </h2>
          <div className="h-48 m-6 overflow-auto overflow-x-hidden">
            {srcs.map((src) => {
              return <TableElement src={src} />;
            })}
          </div>
          <div className="flex justify-end ">
            <Link to="/foros" className="flex ms-auto mt-6">
              <Button variant="contained" color="primary">
                Ir a foros
              </Button>
            </Link>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default ModalDetails;
