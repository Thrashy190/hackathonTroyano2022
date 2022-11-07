import React, { useState } from "react";
import ForumComponents from "../../Components/Foro/ForumComponents";
import MessageComponents from "../../Components/Foro/MessagesComponents";
import RelateForumComponents from "../../Components/Foro/RelateForumComponents";
import Nav from "../../Components/Shared/nav";

const MessagesForum = () => {
  const dummydata = {
    postInfo: {
      user: "Helio",
      date: "23/02/2022",
      title: "Alien en la uaq? sus",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      likeNum: 12,
    },
    tags: {
      university: "UAQ",
      carrer: "Ingenieria en software",
      asigment: "Calculo Integral",
    },
    messages: [
      {
        user: "Juan",
        dateTime: "23/03/2002",
        likes: 12,
        mainMessages: "Bla bla bla 1",
        reply: [
          {
            user: "Miguel",
            dateTime: "23/03/2002",
            likes: 10,
            mainMessages: "Bla bla bla 1.1",
            reply: [
              {
                user: "Alan",
                dateTime: "23/03/2002",
                likes: 10,
                mainMessages: "Bla bla bla 1.1.1",
                reply: [],
              },
            ],
          },
          {
            user: "Ale",
            dateTime: "23/03/2002",
            likes: 5,
            mainMessages: "Bla bla bla 1.2",
            reply: [],
          },
        ],
      },
      {
        user: "Omae",
        dateTime: "23/03/2002",
        likes: 8,
        mainMessages: "Bla bla bla 2",
        reply: [
          {
            user: "Alex",
            dateTime: "23/03/2002",
            likes: 3,
            mainMessages: "Bla bla bla 2.1",
            reply: [],
          },
        ],
      },
      {
        user: "Pau",
        dateTime: "23/03/2002",
        likes: 5,
        mainMessages: "Bla bla bla 3",
        reply: [],
      },
      {
        user: "Diego",
        dateTime: "23/03/2002",
        likes: 12,
        mainMessages: "Bla bla bla 4",
        reply: [],
      },
    ],
  };

  return (
    <div className="w-screen h-full flex bg-white flex-col">
      <Nav />
      <div className="mx-10 my-5 grid grid-cols-[66%_33%] grid-rows-1">
        <div>
          <ForumComponents
            postInfo={dummydata.postInfo}
            tags={dummydata.tags}
          />
          <MessageComponents
            messages={dummydata.messages}
            name={dummydata.postInfo.user}
          />
        </div>
        <div className="ml-3">
          <RelateForumComponents tags={dummydata.tags} />
        </div>
      </div>
    </div>
  );
};

export default MessagesForum;
