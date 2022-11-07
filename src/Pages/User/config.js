import React, { useState } from "react";
import Nav from '../../Components/Shared/nav';
import { FaUserAlt, FaChevronLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const base_url = "https://hackathon-2022-b997c-default-rtdb.firebaseio.com/";

function Input(props) {
    return (
        <div className="mb-4">
            <h2 className="mb-2">{props.data[0]}</h2>
            <input
                className="h-8 w-48 border-2 border-gray-400 rounded-md"
                placeholder={props.data[1]}
                value={props.data[2]}
                onChange={(e) => props.handler(e, props.data[3])}
            />
        </div>
    )
}

function Li(props) {
    return (
        <li className="w-48 h-12 m-4 font-medium hover:bg-indigo-600 hover:text-white hover:rounded-md transition-all cursor-pointer flex justify-center items-center">{props.children}</li>
    )
}

function User() {
    const [account, setAccount] = useState();
    const [uni, setUni] = useState();
    const [career, setCareer] = useState();

    function setData(data) {
        setAccount(data.userName);
        setUni(data.universidad);
        setCareer(data.carrera);
    }

    const [uniF, setUniF] = useState();
    const [careerF, setCareerF] = useState();

    fetch(`${base_url}users.json`)
        .then(res => res.json())
        .then(data => {
            const email = localStorage.getItem('uid');

            Object.keys(data).map(d => {
                if (data[d].email == email) {
                    setData(data[d]);
                    localStorage.setItem('id', d);
                }
            });
        })

    function handleChange(e, f) {
        f(e.target.value);
    }

    function handleSubmit() {
        fetch(`${base_url}users${localStorage.getItem('id') && '/' + localStorage.getItem('id')}.json`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                carrera: careerF,
                universidad: uniF,
            })
        })
            .then(r => r.json())
            .then(d => {
                console.log(d);
            })
    }

    const inputs = [['Universidad', uni, uniF, setUniF], ['Carrera', career, careerF, setCareerF]]
    return (
        <div className="w-full h-full flex bg-white flex-col">
            <Nav />
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-3/4 h-full flex justify-center items-center flex-col">
                    <div className="w-full grid grid-cols-[30%_70%] grid-rows-[1fr_24rem]">
                        <div className="flex items-center justify-center h-24 border-b-2 border-gray-400 mr-4">
                            <div className="text-indigo-600 flex justify-center items-center">
                                <Link to="../perfil"><FaChevronLeft size={25} className="mr-4" /></ Link>
                                <FaUserAlt size={40} className="mr-4" />
                                <h1 className="text-indigo-900 text-2xl font-medium">{account}</h1>
                            </div>
                        </div>
                        <div className="h-24 border-b-2 border-gray-400 flex justify-start items-center">
                            <h1 className="text-indigo-900 font-medium text-2xl">General</h1>
                        </div>
                        <div className="flex justify-center mt-5">
                            <ul className="text-indigo-900">
                                <Li>General</Li>
                                <Li>Cuenta</Li>
                                <Li>Seguridad</Li>
                                <Li>Apariencia</Li>
                                <Li>Notificaciones</Li>
                                <Li>Publicaciones</Li>
                            </ul>
                        </div>
                        <div className="mt-5">
                            {inputs.map((input, i) => {
                                return <Input data={input} key={`input-${i}`} handler={handleChange} />
                            })}
                            <Button variant="contained" onClick={handleSubmit}>Subir</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;