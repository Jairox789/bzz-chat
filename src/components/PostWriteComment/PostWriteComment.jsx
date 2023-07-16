import "./PostWriteComment.css";
import { BiSolidSend } from "react-icons/bi";
import { useState } from "react";

export function PostWriteComment({ handleCommentAdd, photoUser, inputRef }) {
  const [textComment, setTextComment] = useState("");

  const handleTextComment = (e) => {
    setTextComment(e.target.value);
  };

  const handleSubmit = () => {
    handleCommentAdd(textComment);
    setTextComment("");
    inputRef.current.focus(); // Enfocar nuevamente el input
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Evitar el comportamiento predeterminado del Enter en un campo de texto
      handleSubmit();
    }
  };

  return (
    <div className="write_comment">
      <img
        className="write_comment_photoUser"
        src={photoUser}
        alt="user photo"
      />
      <input
        ref={inputRef} // Asignar la referencia al input
        onChange={handleTextComment}
        onKeyDown={handleKeyDown} // Controlador de eventos para la tecla Enter
        value={textComment}
        className="write_comment_input"
        type="text"
        placeholder="Escribe una opinión"
      />
      <BiSolidSend onClick={handleSubmit} className="write_comment_btnSend" />
    </div>
  );
}
