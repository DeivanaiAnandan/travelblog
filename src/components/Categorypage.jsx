import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Categorycard from './Categorycard';

function Categorypage() {
  const { category } = useParams();
  const [categoryBlogPosts, setCategoryBlogPosts] = useState([]);


  useEffect(() => {
    
    axios
      .get(`https://65731f51192318b7db419661.mockapi.io/blogposts?category=${category}`)
      .then((response) => {
        setCategoryBlogPosts(response.data);
        
      })
      .catch((error) => {
        console.error("Error fetching category posts: ", error);
      });
  }, [category]);



  return (
    <div>
        <div className="container ">
          <div className=" row mx-4 justify-content-center categorypage ">
            <h2 className="text-center mt-5 mb-5 fw-bold">Blog Posts in {category}</h2>
      <h2></h2>
      {/* Render categoryPosts here */}

      {categoryBlogPosts.map((post) => (
        <Categorycard key={post.id} post={post} />
      ))}
    </div>
    </div>
    </div>
  );
}

export default Categorypage;
