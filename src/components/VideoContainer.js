import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const response = await data.json();
    //console.log(response.items);
    setVideos(response.items);
  };

  return (
    <div className="flex flex-wrap">
      {/* For Higher Order Component Example: */}
      {/* {videos[0] && <BorderedVideoCard info={videos[0]} />} */}
      {videos.map((video, id) => {
        return (
          <Link key={video.id} to={"watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
