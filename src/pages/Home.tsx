import React from "react";
import { PostsList } from "./PostsList";
import jp from "../assets/jpburns.jpg";

function Home() {
  return (
    <>
      <img className="hero-logo" src={jp} alt="JP Burns sky"/>
      <div className="body">
        <PostsList />
      </div>
    </>
  );
}

export default Home;
