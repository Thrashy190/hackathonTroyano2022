import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const ForumComponents = ({ postInfo, tags }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [numLike, setNumLike] = useState(postInfo.likeNum);

  const changeIcon = () => {
    isSelected ? setNumLike(numLike - 1) : setNumLike(numLike + 1);
    setIsSelected(!isSelected);
  };

  return (
    <div className="border-2 border-gray-400 rounded-xl flex flex-col  w-full mb-3">
      <div className="flex flex-row items-center mt-5 ml-5">
        <Avatar sx={{ bgcolor: "#5D6BE4" }}> {postInfo.user[0]} </Avatar>
        <span className="mx-3">{postInfo.user} </span>
        <span>{postInfo.date} </span>
      </div>
      <div className="flex flex-col mx-6 my-4">
        <span>Universidad: {tags.university}</span>
        <span>Carrera: {tags.carrer}</span>
        <span>Asignatura: {tags.asigment}</span>
      </div>
      <div className="m-6">
        <div className="text-indigo-900 text-4xl mb-6 font-bold">
          {postInfo.title}
        </div>
        <div className="text-light mr-14"> {postInfo.body} </div>
      </div>
      <div className="flex flex-row mb-4">
        <div className="flex flex-row items-center mx-6">
          <div className="text-indigo-600" onClick={() => changeIcon()}>
            {isSelected ? (
              <AiFillStar size={40} />
            ) : (
              <AiOutlineStar size={40} />
            )}
          </div>
          <span className="ml-2">{numLike}</span>
        </div>
      </div>
    </div>
  );
};

export default ForumComponents;
