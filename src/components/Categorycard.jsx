import React from 'react';
import { Link } from 'react-router-dom';

function CategoryCard({ post }) {
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  };
  const truncatedDescription = truncateDescription(post.description, 150);

  return (
    <div className="col-md-4 mb-4 categoryposts">
      <div className="card">
        
        <Link
                  to={{
                    pathname: `/fullblog/${post.id}`, 
                    state: { post: post }, 
                  }}
                  
                >
                 <img src={post.image} className="card-img-top" alt={post.title} />
                </Link>
        <div className="card-body">
          <h5 className="card-title post_title"><b>{post.title}</b></h5>
          <p className="card-text post_desc">{truncatedDescription}</p>
          <p className="card-text post_category">
            {post.category} <span style={{color:"black"}}>BY</span> {post.author}
          </p>
          <p className="card-text">{post.timestamp}</p>
          <Link
                  to={{
                    pathname: `/fullblog/${post.id}`, 
                    state: { post: post }, 
                  }}
                  className="btn btn-primary read_more"
                >
                  Read More
                </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
