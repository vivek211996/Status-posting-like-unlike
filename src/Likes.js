import React, { useState } from 'react'
// import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./like.css"
//import Comment from "./Comment.js"

function Like() {
    const [Like, setLike] = useState(0)
    const [UnLike, setUnLike] = useState(0)
    const [Comment, setComment] = useState("")
   

    function likeHandle(){setLike(Like+1);}
    function unlikeHandle(){setUnLike(UnLike+1);}
    function commentHandle(){setComment(
        console.log("hi")
    )
        
    }
   


    return (
        <div className="reactionbox">
             {/* <FontAwesomeIcon onClick={likeHandle} icon={faThumbsUp} />
              <label id="nlikes">{x.Likes}</label> */}
            <div className="cnt">{Like} <span className="emoji" onClick={likeHandle} aria-label="Like" role="img">👍</span></div>
            <div className="cnt">{UnLike} <span className="emoji" onClick={unlikeHandle} aria-label="Like" role="img">👎 </span></div>
            <div className="cnt">{Comment} <span className="emoji" onClick={commentHandle} aria-label="Like" role="img">💬 </span></div>
          
        </div>
    )
}

export default Like
