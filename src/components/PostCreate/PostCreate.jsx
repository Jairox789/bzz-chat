import "./PostCreate.css";

export function PostCreate({ photoUser, handleModal }) {
  //LOGICA
  return (
    <div className="post_create">
      <div className="post_create_photoUser">
        <img src={photoUser} alt="photo user" />
      </div>
      <div onClick={handleModal} className="post_create_action">
        <span>¿Algún pensamiento?</span>
      </div>
    </div>
  );
}
