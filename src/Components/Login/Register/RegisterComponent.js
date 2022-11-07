import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


const base_url = "https://hackathon-2022-b997c-default-rtdb.firebaseio.com/";

const RegisterComponent = ({ setViewLogin }) => {
  const handleChange = () => {
    setViewLogin(true);
  };

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [dPWD, setDPWD] = useState();

  const [state, setState] = useState();

  function handleSubmit() {
    console.log(name, email, password, dPWD)
    if (password == dPWD) {
      console.log('misma contraseña')
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAivt1eo738_e4s4tSdrvh8ovBhZcNMmK8', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.error) {
            setState('El email ya existe.');
          }
          else {
            localStorage.setItem('key', data.refreshToken);
            localStorage.setItem('uid', email);

            console.log(data.user_id)
            fetch(`${base_url}users.json`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                carrera:  '' ,
                email:  email,
                forumInteractions: '',
                universidad: '',
                userName: name,
              })
            })
              .then(r => r.json())
              .then(d => {
                localStorage.setItem('id', d.name);
              })
            // window.location.href = "/";
          }
        })
    }
    else {
      console.log('saquese')
    }
  }

  function changeName(e) {
    setName(e.target.value);
  }

  function changeEmail(e) {
    setEmail(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function changeDPWD(e) {
    setDPWD(e.target.value);
  }

  return (
    <div className="flex justify-center pt-12 mb-10">
      <div className="border-2 border-gray-400 rounded-xl flex flex-col h-full w-5/12">
        <div className="text-indigo-600 flex justify-center mb-4 mt-6">
          <FaMapMarkerAlt size={60} />
        </div>
        <div className="flex justify-center text-indigo-900 text-4xl mb-6 font-bold ">
          Bienvenido
        </div>

        <TextField
          id="outlined-basic"
          label="Nombre Completo"
          variant="outlined"
          sx={{ ml: 15, mr: 15, mb: 2 }}
          onChange={changeName}
        />

        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          sx={{ ml: 15, mr: 15, mb: 2 }}
          onChange={changeEmail}
        />

        <TextField
          id="outlined-basic"
          label="Contraseña"
          type="password"
          variant="outlined"
          sx={{ ml: 15, mr: 15, mb: 2 }}
          onChange={changePassword}
        />

        <TextField
          id="outlined-basic"
          label="Confirmar contraseña"
          variant="outlined"
          type="password"
          sx={{ ml: 15, mr: 15, mb: 2 }}
          onChange={changeDPWD}
        />

        <Button variant="contained" color="primary" sx={{ ml: 15, mr: 15 }} onClick={handleSubmit}>
          Crear cuenta
        </Button>

        <div className="flex justify-center text-xl mb-6 font-bold text-red-500">
          {state}
        </div>

        <div className="flex justify-center text-indigo-600 mt-8 mb-6 font-light ">
          <span>¿Ya tienes tu cuenta?</span>
          <span
            className="underline ml-1 hover:text-indigo-400 cursor-pointer"
            onClick={() => handleChange()}
          >
            Inicia sesión
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
