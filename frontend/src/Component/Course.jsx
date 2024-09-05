import React from "react"; 
import Card from "./Card";
import { Link } from "react-router-dom";
import list from "../../public/list.json";

function Course() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center justify-center">
        <h1 className="text-2xl font-semibold md:text-4xl">
                We are delighted to have you
        </h1>
        <p className="text-md mt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
        <Link to="/">
        <button className="mt-6 bg-pink-600 text-white px-4 py-2">Back</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {
            list.map((item) => (
                    <Card item={item} key={item.id} />
            ))
        }
      </div>
    </div>
  );
}

export default Course;
