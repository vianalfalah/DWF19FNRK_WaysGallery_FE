import "./Home.css";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPosts, baseURL } from "../../configs/services";
import Moment from "react-moment";
import Header from "../../component/Header/Header";

function Home() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterPosts, setFilterPosts] = useState([]);

  useEffect(() => {
    setFilterPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  });

  useEffect(() => {
    getPosts(setPosts);
  }, []);

  console.log("state posts", posts);
  const date = new Date();

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="container home">
        <div className="content">
          <div className="filter">
            <span>
              
              Today's Posts
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <h4><Moment format="dddd, DD MMMM YYYY">{date}</Moment></h4>

            <input
              style={{ marginLeft: 550, marginTop: 30 }}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="find"
              placeholder="Search"
              className="bg-gray-300  px-4 py-1"
            />
          </div>

          <div className="cards">
            {filterPosts.map((post) => (
              <Link to={`/detail/${post.id}`} key={post.id}>
                <div className="list-card">
                  <Card>
                    <Card.Img variant="top" src={post.photos[0].images} />
                    <Card.Body>
                      <Card.Text className="c-list-card-title">
                        {post.title}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
