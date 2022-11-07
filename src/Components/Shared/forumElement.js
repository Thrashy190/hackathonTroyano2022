import React from "react";

function ForumElement(props) {
    return (
        <div className="h-40 w-full my-5 border-2 border-gray-400 rounded-xl p-5">
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
        </div>
    )
}

export default ForumElement;