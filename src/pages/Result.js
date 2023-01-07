import React from "react";
import Statistics from "../components/statistics/Statistics";

function Result(props) {
  return (
    <>
      <Statistics allPosts={props.allPosts} />
    </>
  );
}

export default Result;
