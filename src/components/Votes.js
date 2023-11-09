import React, { useState } from "react";

function Votes() {
    let [upVotes,setUpVotes] = useState(0)
    const [downVotes,setDownVotes] = useState(0)


    return (
        <div>
            <button onClick={()=>setUpVotes(upVotes+1)}>{upVotes}👍</button>
            <button onClick={()=>setDownVotes(downVotes+1)}>{downVotes}👎</button>
        </div>
    )
}

export default Votes