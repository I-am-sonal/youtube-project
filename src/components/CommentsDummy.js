import React, { useEffect, useState } from "react";
import CommentBox from "./CommentBox";

const CommentsDummy = () => {
  const commentsData = [
    {
      name: "Sonal B",
      text: "Lorem Ipsum",
      replies: [
        {
          name: "Sonal B",
          text: "Lorem Ipsum",
          replies: [],
        },
      ],
    },
    {
      name: "Sonal B",
      text: "Lorem Ipsum",
      replies: [
        {
          name: "sfaf asddddd",
          text: "nested comment 1",
          replies: [],
        },
        {
          name: "A B",
          text: "nested comment 2",
          replies: [
            {
              name: "Akshay",
              text: "nested comment 3",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Sonal B",
      text: "Lorem Ipsum",
      replies: [],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className="comment-box text-left flex">
        <div className="left-section w-20">
          <img
            className="h-10"
            alt="user-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeVjQDi3dH6L92Ydk-Ae3zmQmCxtjF6ZZw0tMuWYeiw&s"
          />
        </div>
        <div className="right-section m-2">
          <p className="user-name font-bold">{name}</p>
          <p className="user-text">{text}</p>
        </div>
      </div>
    );
  };

  const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
      <div>
        <Comment key={index} data={comment} />
        <div className="border-l-gray-500 pl-5 m-2 bg-gray-300 rounded-lg">
          <CommentsList key={index} comments={comment.replies} />
        </div>
      </div>
    ));
  };

  return (
    <div className="comments-wrapper flex flex-col w-[70%]">
      <h1 className="font-bold text-2xl text-left my-2">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsDummy;
