import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function Fullblogpage() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const postResponse = await axios.get(
          `https://65731f51192318b7db419661.mockapi.io/blogposts/${postId}`
        );
        setPost(postResponse.data);

       
        const relatedPostsResponse = await axios.get(
          `https://65731f51192318b7db419661.mockapi.io/blogposts?category=${postResponse.data.category}`
        );
        setRelatedPosts(
          relatedPostsResponse.data.filter(
            (relatedPost) => relatedPost.id !== postId
          )
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [postId]);

  if (!post) {
   
    return <div>Loading...</div>;
  }

  return (
    <div className="container fullblog ">
      <div className="row ">
        <div className="col-md-8 mx-auto">
          <h2>{post.title}</h2>
          <img
            src={post.image}
            alt={post.title}
            style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
          />
          <p>{post.description}</p>
          <p className="fullblog_category">
            {post.category} <span style={{ color: "black" }}>BY</span>{" "}
            {post.author}
          </p>
          <p>{post.timestamp}</p>
        </div>
      </div>

      {/* Display related items */}
      <div className="row mt-4 relatedposts">
        <h3>
          <b>Related Items</b>
        </h3>
        {relatedPosts.map((relatedPost) => (
          <div key={relatedPost.id} className="col-md-4 ">
            <Link to={`/fullblog/${relatedPost.id}`}>
              <img
                src={relatedPost.image}
                alt={relatedPost.title}
                style={{
                  width: "100%",
                  maxHeight: "200px",
                  objectFit: "cover",
                }}
              />
              <h4>{relatedPost.title}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fullblogpage;
