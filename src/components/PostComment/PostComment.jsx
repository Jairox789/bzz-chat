import "./PostComment.css";
import { BiLike, BiDislike } from "react-icons/bi";

export function PostComment({
  photoUser,
  userName,
  commentText,
  dataPublish,
  totalLikes,
  totalDislikes,
}) {
  //LOGICA
  return (
    <div className="post_comment">
      <img className="post_comment_userImg" src={photoUser} alt="user img" />

      <div className="post_comment_content">
        <div className="post_comment_contentUser">
          <span className="post_comment_userName">{userName}</span>
          <span className="post_comment_userComment">{commentText}</span>
        </div>

        <div className="post_comment_reactions">
          <BiLike />
          <BiDislike />
        </div>
      </div>
    </div>
  );
}
