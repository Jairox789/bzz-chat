import { PostReactionsLikes } from "../PostReactionsLikes/PostReactionsLikes";
import "./PostComment.css";

export function PostComment({
  photoUser,
  nickName,
  commentText,
  dataPublish,
  totalLikes,
  totalDislikes,
  initialValueLike,
  initialValueDislike,
}) {
  //LOGICA
  return (
    <div className="post_comment">
      <img className="post_comment_userImg" src={photoUser} alt="user img" />

      <div className="post_comment_content">
        <div className="post_comment_contentUser">
          <div>
            <strong className="post_comment_userName">{nickName}</strong>
            <span className="post_comment_dataPublish">{dataPublish}</span>
          </div>

          <span className="post_comment_userComment">{commentText}</span>
        </div>

        <div className="post_comment_reactions">
          <PostReactionsLikes
            totalLikes={totalLikes}
            totalDislikes={totalDislikes}
            initialValueLike={initialValueLike}
            initialValueDislike={initialValueDislike}
          />
        </div>
      </div>
    </div>
  );
}
