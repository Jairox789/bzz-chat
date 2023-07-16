import "./Post.css";
import { PostInfo } from "../PostInfo/PostInfo";
import { PostImg } from "../PostImg/PostImg";
import { PostComment } from "../PostComment/PostComment";
import { PostText } from "../PostText/PostText";
import { PostReactionsLikes } from "../PostReactionsLikes/PostReactionsLikes";
import { PostReactionsComment } from "../PostReactionsComment/PostReactionsComment";
import { PostWriteComment } from "../PostWriteComment/PostWriteComment";
import { useState, useRef } from "react";

export function Post({
  nickName,
  photoUser,
  post,
  initialValueLike,
  initialValueDislike,
  initialValueCommentsReactions,
}) {
  //LOGICA
  //REF
  const inputRef = useRef(null);
  //MANEJO DE FECHAS
  const actualDate = new Date();

  // Arreglo de nombres de meses
  const months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  const day = actualDate.getDate();
  const month = months[actualDate.getMonth()];
  const year = actualDate.getFullYear();

  // FECHA FORMATEADA
  const dataFormated = `${day} de ${month} ${year}`;

  //MANEJO DE COMENTARIOS
  const [comments, setComments] = useState(post.comments);

  const handleCommentAdd = (newComment) => {
    const newCommentObj = {
      idComment: 2,
      idFromPost: 2,
      nickName: nickName,
      photoUser: photoUser,
      commentText: newComment,
      dataPublish: dataFormated,
      totalLikes: 0,
      totalDislikes: 0,
    };

    setComments((prevComments) => [...prevComments, newCommentObj]);
  };

  return (
    <div className="post">
      <div className="post_info">
        <PostInfo
          nickName={post.nickName}
          photoUser={post.photoUser}
          dataPublish={post.dataPublish}
        />
      </div>

      <div className="post_content">
        {post.postImg.length > 0 && (
          <div className="post_content_imgContainer">
            {post.postImg.map((imgSrc, index) => (
              <PostImg key={index} imgSrc={imgSrc} />
            ))}
          </div>
        )}
        <PostText text={post.postText} />
      </div>

      <div className="post_reactions">
        <PostReactionsLikes
          initialValueLike={initialValueLike}
          initialValueDislike={initialValueDislike}
          totalLikes={post.totalLikes}
          totalDislikes={post.totalDislikes}
        />

        <PostReactionsComment
          inputRef={inputRef}
          totalComments={comments.length}
        />
      </div>
      <PostWriteComment
        inputRef={inputRef}
        handleCommentAdd={handleCommentAdd}
        photoUser={photoUser}
      />

      <div className="post_comments_container">
        {comments.map((comment) => (
          <PostComment
            key={comment.idComment}
            photoUser={comment.photoUser}
            nickName={comment.nickName}
            commentText={comment.commentText}
            dataPublish={comment.dataPublish}
            totalLikes={comment.totalLikes}
            totalDislikes={comment.totalDislikes}
            initialValueLike={initialValueCommentsReactions.commentLiked.includes(
              comment.idComment
            )}
            initialValueDislike={initialValueCommentsReactions.commentDisliked.includes(
              comment.idComment
            )}
          />
        ))}
      </div>
    </div>
  );
}
