import React from "react";
import "./chapter432.scss"
import Button from "../../components/Button";
export default function Chapter432() {
  return (
    <>
    <Button title={"click me"} onClick={() => {}} />
    <Button title={"click me  Iam active"} onClick={() => {}} isActive={true}/>
    <div className="card">
    <img src="https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg" alt="" className="image" />
      <h1 className="title"> normal heading for test global styles</h1>
      <p className="body">
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <span className="span">Responsive left-aligned hero with image</span><br />
      <button className="button">Join here</button>
    </div>
    <div className="card-large">
    <img src="https://thumbs.dreamstime.com/b/innovative-medical-device-featuring-eye-image-illustrating-advanced-tracking-technology-generated-ai-358374352.jpg" alt="" />
      <h1> normal heading for test global styles</h1>
      <p>
        Paragraph of text beneath the heading to explain the heading. We'll add
        onto it with another sentence and probably just keep going until we run
        out of words.
      </p>
      <span>Responsive left-aligned hero with image</span><br />
      <button>Join here</button>
    </div>
    
    </>
  );
}
