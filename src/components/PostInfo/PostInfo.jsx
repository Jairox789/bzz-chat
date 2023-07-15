import "./PostInfo.css";

export function PostInfo({ userName, photoUser, dataPublish }) {
  //LOGICA
  return (
    <>
      <img className="post_info_userImg" src={photoUser} alt="user img" />
      <span className="post_info_userName">{userName}</span>
      <span className="post_info_dataPost">{dataPublish}</span>
    </>
  );
}
