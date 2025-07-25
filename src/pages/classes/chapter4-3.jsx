import React from "react";
import "./chapter43.module.css"
export default function ChapterFourThree() {

  return (
    <>
    {/* ---diff between normal css and js object styling */}
      <div className="box">
        <h1 className="heading">Chapter Four Three</h1>
      </div>
      <div style={{backgroundColor:'yellow'}}>
        <h1 style={{color:'red'}}>Chapter Four Three</h1>
      </div>
    </>
  );
}
