import React from "react";

function Card({item}) { 
  return (
    <>
    <div className="mt-4 my-3 p-3">
      <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure>
          <img
            src={item.image}
            alt="book-images"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline p-5 rounded-md ">${item.price}</div>
            <div className="badge badge-outline hover:bg-pink-500 hover:text-whit cursor-pointer rounded-md p-5 ">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;
