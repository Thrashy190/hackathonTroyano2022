import React, { useState } from "react";
import Nav from '../../Components/Shared/nav';
import ForumElement from '../../Components/Shared/forumElement';
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function User() {
    const [account, setAccount] = useState();
    const [uni, setUni] = useState();
    const [career, setCareer] = useState();

    function setData(data) {
        setAccount(data.userName);
        setUni(data.universidad);
        setCareer(data.carrera);
    }

    fetch('https://hackathon-2022-b997c-default-rtdb.firebaseio.com/users.json')
        .then(res => res.json())
        .then(data => {
            const email = localStorage.getItem('uid');
            Object.keys(data).map(d => {
                data[d].email == email && setData(data[d]);
                console.log(account);
            });
        })

    const fE = [
        { title: 'ola', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '3h', r: 23 },
        { title: 'hola', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '4h30', r: 2 },
        { title: 'tengo una question', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '5h', r: 75 },
        { title: 'tengo esta pregunta', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '6h30', r: 34 },
        { title: 'aliens en la uaq?', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '7h', r: 92 },
        { title: 'profe dieGOD', u: 'UAQ', c: 'Informática', a: 'Progra', lI: '8h', r: 223 },
    ]

    return (
        <div className="w-full h-full flex bg-white flex-col">
            <Nav />
            <div className="w-full h-full flex justify-center items-center">
                <div className="mt-5 w-3/4 flex justify-center items-center flex-col">
                    <div className="w-1/3 grid grid-cols-[25%_75%] mb-5">
                        <div className="text-indigo-600 flex justify-center items-center flex-col">
                            <FaUserAlt size={50} />
                            <Link to="../config" className="font-medium">Editar</Link>
                        </div>
                        <div className="text-indigo-900">
                            <h1 className="font-medium text-2xl">{account}</h1>
                            <h2>{uni}</h2>
                            <h2>{career}</h2>
                        </div>
                    </div>
                    <h1 className="font-medium text-2xl text-right text-indigo-900">Últimas Interacciones</h1>
                    <div className="w-full p-5 flex justify-center items-center flex-col">
                        {
                            fE.map((info, i) => {
                                return <ForumElement info={info} key={`info-${i}`} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;