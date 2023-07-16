import "./PostImg.css";

export function PostImg({ imgSrc }) {
  //LOGICA
  return <img className="post_content_img" src={imgSrc} alt="post image" />;
}
