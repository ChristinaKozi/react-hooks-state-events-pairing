import React, { useState } from "react";

function Comments({isShown, comments }) {


    if (!isShown) {
        return null
    } else {
        return (
            <div>
                <h1>{comments.length} Comments</h1>
                {comments.map(comment => {
                    return (
                        <div>
                            <h4>{comment.user}</h4>
                            <p>{comment.comment}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Comments;
