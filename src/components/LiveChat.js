import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRamdomNames, generateRamdomText } from "../utils/helper";

const LiveChat = () => {
  const [customLiveMessage, setCustomLiveMessage] = useState("");

  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);
  //console.log(ChatMessages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      //console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRamdomNames(),
          message: generateRamdomText(15),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="live-chat m-2 p-2 border border-black rounded-lg w-full min-h-[500px] max-h-[500px] text-left overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((chat, i) => (
            <ChatMessage key={i} name={chat.name} message={chat.message} />
          ))}
        </div>
      </div>
      <form
        className="custom-live-message w-full border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Sonal B",
              message: customLiveMessage,
            })
          );
          setCustomLiveMessage("");
        }}
      >
        <input
          className="w-[80%]"
          type="text"
          placeholder="Say Something..."
          value={customLiveMessage}
          onChange={(e) => setCustomLiveMessage(e.target.value)}
        />
        <button className="w-[20%]">Submit</button>
      </form>
    </div>
  );
};

export default LiveChat;
