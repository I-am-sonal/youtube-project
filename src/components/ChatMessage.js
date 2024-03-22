import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div>
      <div className="chat-message flex items-center shadow-sm bg-gray-100 my-2">
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeVjQDi3dH6L92Ydk-Ae3zmQmCxtjF6ZZw0tMuWYeiw&s"
        />
        <span className="px-2 font-bold">{name}</span>
        <span className="flex flex-col-reverse">{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
