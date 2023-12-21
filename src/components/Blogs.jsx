
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {
  FaEdit,FaTrash 
} from "react-icons/fa";

function Allblogs({authenticated}) {
  const [blogposts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categorySuggestions, setCategorySuggestions] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('https://65731f51192318b7db419661.mockapi.io/blogposts/');
        setBlogPosts(response.data);

        const uniqueCategories = Array.from(
          new Set(response.data.map((post) => post.category.toLowerCase()))
        );
        setCategorySuggestions(uniqueCategories);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    setSearchTerm(category);
  };

  const handleDelete = async (postId) => {
    try {
     
      await axios.delete(`https://65731f51192318b7db419661.mockapi.io/blogposts/${postId}`);
      
      
      setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      
    } catch (error) {
      console.error('Error deleting blog post:', error);
    }
  };

  return (
    <div className="container mt-5 allblogs">
      <h2 className="text-center mb-4" style={{ marginTop: '100px' }}>
        <b>All Blog Posts</b>
      </h2>
      <div className="row">
        <div className="col-md-12 mb-4">
          <div className="input-group" style={{ width: '25%' }}>
            <input
              type="text"
              className="form-control"
              placeholder="Search by title or category..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          {categorySuggestions.length > 0 && searchTerm.length > 0 && (
            <div className="category-suggestions">
              <p>Suggested Categories:</p>
              <ul>
                {categorySuggestions.map((category) => (
                  <li key={category} onClick={() => handleCategoryClick(category)}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {blogposts
          .filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((post) => (
            <div className="col-md-4" key={post.id}>
              <div className="card mb-4">
                
                <Link
                    to={{
                      pathname: `/fullblog/${post.id}`, 
                      state: { post: post }, 
                    }}
                    
                  >
                    <img src={post.image} className="card-img-top" alt={post.title} />
                  </Link>
                <div className="card-body">
                  <h5 className="card-title post_title">
                    <b>{post.title}</b>
                  </h5>
                  <p className="card-text post_desc">
                    {post.description.length > 150
                      ? `${post.description.slice(0, 150)}...`
                      : post.description}
                  </p>
                  <p className="card-text post_category">
                    {post.category} <span style={{ color: 'black' }}>BY</span> {post.author}
                  </p>

                  <Link
                    to={{
                      pathname: `/fullblog/${post.id}`, 
                      state: { post: post }, 
                    }}
                    className="btn btn-primary read_more"
                  >
                    Read More
                  </Link>
                  {authenticated && (
          <div className="edit-delete-icons">
            <Link to={`/editblog/${post.id}`} style={{margin:"10px", fontSize:"15px"}}>
              <FaEdit></FaEdit> 
            </Link>
            <span className="delete_btn" style={{margin:"10px", fontSize:"15px"}} onClick={() => handleDelete(post.id)}>
              <FaTrash></FaTrash> 
            </span>
          </div>
        )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Allblogs;
