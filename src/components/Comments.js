import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_COMMENTS } from "../utils/constants";
import CommentBox from "./CommentBox";

const Comments = () => {
  // const commentsData = [
  //   {
  //     name: "Sonal B",
  //     text: "Lorem Ipsum",
  //     replies: [
  //       {
  //         name: "Sonal B",
  //         text: "Lorem Ipsum",
  //         replies: [],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Sonal B",
  //     text: "Lorem Ipsum",
  //     replies: [
  //       {
  //         name: "Sonal B",
  //         text: "Lorem Ipsum",
  //         replies: [],
  //       },
  //       {
  //         name: "Sonal B",
  //         text: "Lorem Ipsum",
  //         replies: [
  //           {
  //             name: "Sonal B",
  //             text: "Lorem Ipsum",
  //             replies: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     name: "Sonal B",
  //     text: "Lorem Ipsum",
  //     replies: [],
  //   },
  // ];

  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_COMMENTS);
    const response = await data.json();
    console.log(response.items);
    setComments(response.items);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div className="comments-wrapper flex flex-col">
      <h1 className="font-bold text-2xl text-left my-2">Comments:</h1>
      {comments.map((comment) => {
        return (
          <div>
            <CommentBox key={comment.id} comments={comments} />
            <div className="border-l-gray-500 pl-5 m-2 bg-gray-300 rounded-lg">
              <CommentBox key={comment.id} comments={comments} />
              <CommentBox key={comment.id} comments={comments} />
              <CommentBox key={comment.id} comments={comments} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
