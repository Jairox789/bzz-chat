import { PostInfo } from "../PostInfo/PostInfo";
import { PostImg } from "../PostImg/PostImg";
import { PostComment } from "../PostComment/PostComment";
import "./Post.css";
import { BiLike, BiDislike, BiComment } from "react-icons/bi";
import { PostText } from "../PostText/PostText";

export function Post(props) {
  //LOGICA
  const { post } = props;
  return (
    <div className="post_container">
      <div className="post_info">
        <PostInfo
          userName={post.userName}
          photoUser={post.photoUser}
          dataPublish={post.dataPublish}
        />
      </div>

      <div className="post_content">
        <div className="post_content_imgContainer">
          <PostImg imgSrc={post.postImg} />
        </div>
        <PostText text={post.postText} />
      </div>

      <div className="post_reactions">
        <div className="post_reactions_like">
          <BiLike />
          <BiDislike />
        </div>

        <div className="post_reactions_comments">
          <BiComment />
        </div>
      </div>

      <div className="post_comments_container">
        <PostComment
          photoUser={post.comments[0].photoUser}
          userName={post.comments[0].userName}
          commentText={post.comments[0].commentText}
          dataPublish={post.comments[0].dataPublish}
          totalLikes={post.comments[0].totalLikes}
          totalDislikes={post.comments[0].totalDislikes}
        />
      </div>
    </div>
  );
}
