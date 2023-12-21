import React from 'react'
import { Link } from 'react-router-dom'

function Blogposts({posts, isHomePage}) {
  const { id, image, title, description, category, author, timestamp } = posts;
  // console.log(posts); 
  const truncateDescription = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    } else {
      return text;
    }
  };
  return (
   
    <>

    <div className="col-md-8 blogposts">
                <div className="card mb-3" >
                    <div className="row g-0">
                
                        <div className="col-md-6">
                        <Link
                to={{
                  pathname: `/fullblog/${id}`,
                  state: { post: posts },
                }}
              >
                <img
                  src={`${image}`}
                  style={{ width: '370px', height: '225px' }}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </Link>
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                            <h5 className="card-title posts_title"><b>{title}</b></h5>
                            <p className="card-text posts_desc">
                            {isHomePage ? truncateDescription(description, 160) : description}</p>
                              {/* {posts.description}</p> */}
                            <p className="card-text posts_category">{category} <span style={{color:"black"}}>BY </span>{author}</p>
                            <p className="card-text posts_timestamp">{timestamp}</p>
                            <Link
                  to={{
                    pathname: `/fullblog/${id}`, 
                    state: { post: posts }, // Pass the post data to the full blog page
                  }}
                  className="btn btn-primary read_more"
                >
                  Read More
                </Link>
                            </div>
                        </div>
                    </div>
                
        
                </div>
    </div>
  
 
    </>
  )
}

export default Blogposts