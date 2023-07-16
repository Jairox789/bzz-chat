import "./PostInfo.css";

export function PostInfo({ nickName, photoUser, dataPublish }) {
  //LOGICA
  return (
    <>
      <img className="post_info_userImg" src={photoUser} alt="user img" />
      <span className="post_info_userName">{nickName}</span>
      <span className="post_info_dataPost">{dataPublish}</span>
    </>
  );
}
