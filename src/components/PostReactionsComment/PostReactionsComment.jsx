import "./PostReactionsComment.css";
import { BiComment } from "react-icons/bi";

export function PostReactionsComment({ totalComments, inputRef }) {
  //LOGICA
  return (
    <div className="post_reactions_comments">
      <BiComment
        className="post_reactions_btn"
        onClick={() => {
          inputRef.current.focus();
        }}
      />
      <span className="post_reactions_comments_counter">{totalComments}</span>
    </div>
  );
}
