import "./PostReactionsLikes.css";
import { BiLike, BiDislike } from "react-icons/bi";
import { useState } from "react";

export function PostReactionsLikes({
  initialValueLike,
  initialValueDislike,
  totalLikes,
  totalDislikes,
  handleLike,
}) {
  //LOGICA
  //ESTADO DE LIKES
  const [isLiked, setIsLiked] = useState(initialValueLike);
  const [isDisLiked, setIsDisLiked] = useState(initialValueDislike);

  function handleLike() {
    setIsDisLiked(false);
    setIsLiked(!isLiked);
  }

  function handleDisLike() {
    setIsLiked(false);
    setIsDisLiked(!isDisLiked);
  }

  //ESTILO DE LIKES
  function isLikedClassName(isLiked) {
    return isLiked ? "reaction_liked" : "reaction_nonLiked";
  }

  function isDisLikedClassName(isDisLiked) {
    return isDisLiked ? "reaction_disliked" : "reaction_nonDisliked";
  }

  return (
    <div className="post_reactions_like">
      <div className="reaction_like">
        <BiLike onClick={handleLike} className={isLikedClassName(isLiked)} />
        <span className="reaction_like_counter">{totalLikes}</span>
      </div>
      <div className="reaction_dislike">
        <BiDislike
          onClick={handleDisLike}
          className={isDisLikedClassName(isDisLiked)}
        />
        <span className="reaction_dislike_counter">{totalDislikes}</span>
      </div>
    </div>
  );
}
