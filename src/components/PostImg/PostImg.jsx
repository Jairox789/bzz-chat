import "./PostImg.css";

export function PostImg({ imgSrc }) {
  //LOGICA
  return <img className="post_content_img" src={imgSrc[0]} alt="post image" />;
}
