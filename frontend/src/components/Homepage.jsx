import React from "react";
import HomeCard from "./HomeCard";

function Homepage(props) {
  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen flex flex-wrap justify-center items-start gap-10 pt-10">
      {props.data.map((person, key) => (
        <HomeCard key={key} person={person} />
      ))}
    </div>
  );
}

export default Homepage;
