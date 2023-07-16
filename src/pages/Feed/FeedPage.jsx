import "./FeedPage.css";
import { Post } from "../../components/Post/Post";

const userInfo = {
  idUser: 1,
  userFirstName: "Jairo",
  userLastName: "Ortega Vazquez",
  nickName: "Jairox789",
  photoUser: "https://unavatar.io/jairo.161.ortega@gmail.com",
  postPublished: [1],
  reactionPost: {
    postLiked: [1, 2],
    postDisliked: [0],
  },
  reactionComments: {
    commentLiked: [1, 2],
    commentDisliked: [0],
  },
};
const postExample = [
  {
    idPost: 1,
    idFromUser: 1,
    nickName: "Jairox789",
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
        nickName: "JorgeLpz",
        photoUser: "https://unavatar.io/jorge.lopez@gmail.com",
        commentText: "Muy buen aporte!",
        dataPublish: "13 de julio 2023",
        totalLikes: 1,
        totalDislikes: 0,
      },
    ],
  },
  {
    idPost: 2,
    idFromUser: 2,
    nickName: "JorgeLpz",
    photoUser: "https://unavatar.io/jorge.lopez@gmail.com",
    dataPublish: "15 de julio 2023",
    postImg: [
      "https://www.somosxbox.com/wp-content/uploads/2022/12/Todas-las-plataformas-en-las-que-estara-Call-of-Duty-de-lanzamiento-tras-la-compra-de-Activision-Blizzard.jpg",
    ],
    postText:
      "La compra de Activision Blizzard por parte de Xbox está siguiendo un camino repleto de obstáculos a superar. No obstante, el más destacado de todos es la posible futura exclusividad de Call of Duty para consolas Xbox, lo que ha provocado que Sony pelee con todo lo que tiene para intentar dinamitar el acuerdo en los principales organismos de regulación de competencia.",
    totalLikes: 2,
    totalDislikes: 4,
    comments: [
      {
        idComment: 2,
        idFromPost: 2,
        nickName: "Jairox789",
        photoUser: "https://unavatar.io/jairo.161.ortega@gmail.com",
        commentText: "Puro exclusivo",
        dataPublish: "16 de julio 2023",
        totalLikes: 1,
        totalDislikes: 0,
      },
    ],
  },
];

export function FeedPage(params) {
  //LOGICA

  return (
    <div className="posts-container">
      {postExample.map((post) => (
        <Post
          key={post.idPost}
          nickName={userInfo.nickName}
          photoUser={userInfo.photoUser}
          post={post}
          initialValueLike={userInfo.reactionPost.postLiked.includes(
            post.idPost
          )}
          initialValueDislike={userInfo.reactionPost.postDisliked.includes(
            post.idPost
          )}
          initialValueCommentsReactions={userInfo.reactionComments}
        />
      ))}
    </div>
  );
}
