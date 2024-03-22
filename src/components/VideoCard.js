import React from "react";

const VideoCard = ({ info }) => {
  //console.log(info);
  if (!info) return null;
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 text-left">
      <div className="video-box shadow-gray-700 rounded-lg w-80">
        <div className="img-container rounded-lg">
          <img src={thumbnails.medium.url} alt="video-thumbnail" />
        </div>
        <div className="video-title font-bold">{title}</div>
        <div className="channel-title">{channelTitle}</div>
        <div className="channel-title">{statistics.viewCount} views</div>
      </div>
    </div>
  );
};

// export const BorderedVideoCard = ({ info }) => {
//   return (
//     <div className="border border-red-700 m-2 p-2 bg-red">
//       <VideoCard info={info} />
//     </div>
//   );
// };

export default VideoCard;
