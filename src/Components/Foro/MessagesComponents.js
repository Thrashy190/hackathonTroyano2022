import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const Message = ({ messages, key }) => {
  const [isLiked, setIsliked] = useState(false);
  const [numLike, setNumLike] = useState(messages.likes);
  const [addAnswer, setAddAnswer] = useState(messages.replay);

  const changeIcon = () => {
    isLiked ? setNumLike(numLike - 1) : setNumLike(numLike + 1);
    setIsliked(!isLiked);
  };

  const template = {
    user: "",
    dateTime: "",
    likes: 0,
    mainMessages: "",
    reply: [],
  };

  return (
    <div
      key={`message-${key}`}
      className="border border-gray-300 rounded-xl flex flex-col mx-8 my-3"
    >
      <div className="flex flex-row justify-between my-4">
        <div className="flex flex-row items-center mt-5 ml-5">
          <Avatar sx={{ bgcolor: "#5D6BE4" }}> {messages.user[0]} </Avatar>
          <div className="mx-6">{messages.user}</div>
          <span>{messages.dateTime} </span>
        </div>
        <div className="flex flex-row items-center mr-5">
          <div className="text-indigo-600" onClick={() => changeIcon()}>
            {isLiked ? <AiFillStar size={40} /> : <AiOutlineStar size={40} />}
          </div>
          <span className="ml-2">{numLike}</span>
        </div>
      </div>
      <div className="mx-6 my-4">{messages.mainMessages}</div>
      <TextField
        id="outlined-basic"
        label={`Responder a ${messages.user}`}
        variant="outlined"
        sx={{ ml: 15, mr: 15, mb: 4, mt: 2 }}
      />
      {messages.reply.map((item, j) => {
        return <Message messages={item} key={`message-${key}-${j}`} />;
      })}
    </div>
  );
};

const MessageComponents = ({ messages, name }) => {
  return (
    <div className="border-2 border-gray-400 rounded-xl flex flex-col ">
      <div className="m-10">
        <TextField
          id="filled-textarea"
          label={`Responder a ${name}`}
          placeholder="Escribre tu mejor respuesta"
          multiline
          fullWidth
        />
      </div>
      <div>
        {messages.map((item, i) => {
          return <Message messages={item} key={i} />;
        })}
      </div>
    </div>
  );
};

export default MessageComponents;
