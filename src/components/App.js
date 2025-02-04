import React, {useState} from "react";
import video from "../data/video.js";
import Votes from "./Votes.js"
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const [showComments, setShowComments] = useState(true)

  function handleClick() {
      setShowComments(!showComments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Votes />
      <button onClick={handleClick}>{showComments ? 'Hide Comments' : 'Show Comments'}</button>
       <hr></hr>
      <Comments isShown={showComments} comments={video.comments}/>
    </div>
  );
}

export default App;
