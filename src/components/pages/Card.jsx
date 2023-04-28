import React from "react";

function Card({ posts }) {
  return (
    <div className="bg-purple-700 rounded-md flex flex-col text-white shadow-2xl shadow-purple-700  gap-3 px-4 py-4 pt-5">
      <h1 className="font-bold bg-white w-fit text-2xl text-purple-700 px-4 py-4 mx-auto shadow-sm shadow-white">
        {posts.title}
      </h1>

      <div className="flex  gap-3 justify-between lg:flex-row flex-col">
        <p
          className="
        inline opacity-40"
        >
          {posts.author} <span>on</span> {posts.date}
        </p>
        <p className="inline py-2 text-white px-5 bg-black capitalize">on category {posts.category}</p>
      </div>

      <p>{posts.content}</p>
      <div className="tags grid lg:grid-cols-3 mx-auto lg:px-8 mt-5 gap-3 flex-col grid-cols-2 ">
        {posts.tags.map((tag, index) => {
          return <p className="inline text-center text-purple-700 bg-white px-1 py-1 "># {tag}</p>;
        })}
      </div>
    </div>
  );
}

export default Card;
