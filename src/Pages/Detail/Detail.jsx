import { useState, useEffect } from "react";
import Header from "./../../component/Header/Header";
import userIcon from "../../assets/icon/userIcon.png";
import { getPostById, baseURL } from "../../configs/services";
import { useParams, Link } from "react-router-dom";

import "./Detail.css";

function Detail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    (async () => {
      const post = await getPostById(id);
      console.log(post);
      if (post) {
        return setPost(post.data.data.post);
      }
    })();
  }, [id]);

  return post ? (
    <>
      <Header />

      <div className="post-info">
        <Link to={`/profile/${post.createdBy.id}`}>
          <img
            className="post-avatar"
            src={
              post.createdBy.profile.avatar === "default"
                ? userIcon
                : post.createdBy.profile.avatar
            }
          />
        </Link>
        <p className="post-name">{post.title}</p>
        <p className="post-title">{post.createdBy.fullName}</p>
        <Link to={`/hire/${post.createdBy.id}`}>
          <button className="btn">Hire</button>
        </Link>
      </div>
      <div className="post-img">
        {post && post.createdBy && (
          <>
            <img className="img1" alt={post.id} src={post.photos[0].images} />
            <img className="img2" alt={post.id} src={post.photos[1].images} />
          </>
        )}
      </div>
      <div className="post-desc">
        <p>
          👋 Say Hello{" "}
          <b style={{ color: " #2fc4b2" }}>{post.createdBy.email}</b>
        </p>
        <p>{post.description}</p>
      </div>
    </>
  ) : (
    <>
      <Header />
      <h1 style={{ textAlign: "center", marginTop: 300 }}>Post Tidak Ada</h1>
    </>
  );
}

export default Detail;
