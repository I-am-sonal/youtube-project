import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //how to read the store
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  /*
   * searchCache = {
   * "iphone": ["iphone 13","iphone 14"]
   * }
   *
   * searchQuery = iphone
   *
   */
  useEffect(() => {
    //API call
    console.log(searchQuery);

    // Make an API call on every key press
    //but the difference between 2 API calls is <200ms
    //Decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]); //useEffect will be called every time the search query changes

  const getSearchSuggestions = async () => {
    //console.log("api call - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);

    //update Cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="head-wrapper grid grid-flow-col p-2 shadow-lg fixed bg-white top-0 w-full">
      <div className="logo-section flex col-span-2">
        <img
          className="h-10 mr-2 hamburger-menu cursor-pointer"
          alt="menu"
          onClick={() => toggleMenuHandler()}
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-10"
          alt="youtube-logo"
          src="https://ongpng.com/wp-content/uploads/2023/04/3.youtube-logo-2416x776-1.png"
        />
      </div>
      <div className="search-section flex col-span-8 relative">
        <input
          className="border border-gray-500 font-normal w-1/2 rounded-l-full px-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          placeholder="Search"
        />
        <button
          className="border border-gray-500 px-2 rounded-r-full bg-gray-700 bg-cover bg-no-repeat pr-8"
          style={{
            backgroundImage:
              'url("https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=")',
          }}
        ></button>
        {showSuggestions && (
          <div className="search-suggestions fixed bg-white w-1/3 top-14 shadow rounded-lg text-left p-2">
            <ul>
              {suggestions.map((suggestion) => {
                return (
                  <li
                    key={suggestion}
                    className="hover:bg-gray-100 cursor-pointer"
                    style={{
                      backgroundImage:
                        'url("https://media.istockphoto.com/id/924437708/vector/magnifying-glass-icon.jpg?s=612x612&w=0&k=20&c=VXDoaQ6Ns61N2v6CsMXX-vYlG5oUY3ufoUncvUp1zNY=")',
                      backgroundSize: "20px",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "25px",
                      backgroundPosition: "0 2px",
                      paddingLeft: "20px",
                    }}
                  >
                    {suggestion}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
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
