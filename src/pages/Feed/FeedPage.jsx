import { Post } from "../../components/Post/Post";

const postJairo = {
  idPost: 1,
  userName: "Jairo Ortega Vazquez",
  photoUser: "https://unavatar.io/jairo.161.ortega@gmail.com",
  dataPublish: "13 de julio 2023",
  postImg: [
    "https://images.wallpaperscraft.com/image/single/laptop_code_programming_212332_3840x2400.jpg",
  ],
  postText:
    "JavaScript no es el futuro, es el PRESENTE. JavaScript, que tradicionalmente es un idioma frontal, se ha transformado a un idioma dorsal por medio de 'Node. js'. En otras palabras, ahora es posible programar el frente y el dorso de un sitio web solamente con JavaScript",
  totalLikes: 4,
  totalDislikes: 2,
  comments: [
    {
      idComment: 1,
      idFromPost: 1,
      userName: "Jorge Lopez",
      photoUser: "https://unavatar.io/jorge.lopez@gmail.com",
      commentText: "Muy buen aporte!",
      dataPublish: "13 de julio 2023",
      totalLikes: 1,
      totalDislikes: 0,
    },
  ],
};

export function FeedPage(params) {
  //LOGICA
  return <Post post={postJairo} />;
}
