import React from "react";

const Head = () => {
  return (
    <div className="head-wrapper grid grid-flow-col p-2 shadow-lg">
      <div className="logo-section flex col-span-2">
        <img
          className="h-10 mr-2"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-10"
          alt="youtube-logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png"
        />
      </div>
      <div className="search-section flex col-span-8">
        <input
          className="border border-gray-500 font-normal w-1/2 rounded-l-full px-2"
          type="text"
          placeholder="Search"
        />
        <button
          className="border border-gray-500 px-2 rounded-r-full bg-gray-700 bg-cover bg-no-repeat pr-8"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=")',
          }}
        ></button>
      </div>
      <div className="user-section flex col-span-2">
        <img
          className="h-10"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeVjQDi3dH6L92Ydk-Ae3zmQmCxtjF6ZZw0tMuWYeiw&s"
        />
      </div>
    </div>
  );
};

export default Head;
