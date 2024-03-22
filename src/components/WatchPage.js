import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
// import Comments from "./Comments";
import CommentsDummy from "./CommentsDummy";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  let [searchParams] = useSearchParams();
  //console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full flex flex-col">
      <div className="p-5 flex w-[100%]">
        <iframe
          className="rounded-lg"
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="live-chat-wrapper w-[30%]">
          <LiveChat />
        </div>
      </div>
      <div className="comments-wrapper">
        {/* comments section */}
        {/* <Comments /> */}
        <CommentsDummy />
      </div>
    </div>
  );
};

export default WatchPage;
