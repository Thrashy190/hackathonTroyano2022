import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForumCard = ({ item, key }) => {
  return (
    <Link
      className="border-2 border-gray-400 rounded-xl flex flex-col mx-4 my-3"
      key={`forumCard-${key}`}
      to="/mensajes"
    >
      <div className="text-indigo-900 text-2xl mt-2 font-bold flex justify-center">
        {item.title}
      </div>
      <div className=" flex flex-row justify-around my-2">
        <div className="text-base ">{item.u}</div>
        <div className="text-base ">{item.c}</div>
        <div className="text-base">{item.a}</div>
      </div>
    </Link>
  );
};

const RelateForumComponents = ({ tags }) => {
  const dummyForums = [
    { title: "ola", u: "UAQ", c: "Informática", a: "Progra" },
    {
      title: "hola",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
    },
    {
      title: "tengo una question",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
    },
    {
      title: "tengo esta pregunta",
      u: "ITS",
      c: "Informática",
      a: "Progra",
    },
    {
      title: "aliens en la uaq?",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
    },
    {
      title: "profe dieGOD",
      u: "ITS",
      c: "Informática",
      a: "Progra",
    },
    {
      title: "hola",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
    },
    {
      title: "hola",
      u: "UAQ",
      c: "Informática",
      a: "Progra",
    },
  ];

  return (
    <div className="border-2 border-gray-400 rounded-xl flex flex-col h-96 w-full ">
      <div className="text-indigo-900 text-3xl my-6 font-bold flex justify-center">
        Tal vez te pueda interesar
      </div>
      <div className="overflow-auto">
        {dummyForums.map((item, i) => {
          return item.u === tags.university ? (
            <ForumCard item={item} key={i} />
          ) : null;
        })}
      </div>
    </div>
  );
};

export default RelateForumComponents;
