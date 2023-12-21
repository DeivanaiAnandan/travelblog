import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popularposts from "./Popularposts";



function About() {
  const [popularPosts, setPopularPosts] = useState([]);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      try {
        const response = await axios.get('https://657eb8313e3f5b18946404b1.mockapi.io/popularposts');
        setPopularPosts(response.data);
      } catch (error) {
        console.error('Error fetching popular posts:', error);
      }
    };

    fetchPopularPosts();
  }, []);

  return (
    <>
     <div className="container mt-5" >
          <div className="row" style={{marginTop:"100px"}}>
            <div className="col-md-6 mx-auto">
              <h2 className="text-center mt-5 mb-5 fw-bold">Popular Posts</h2>
              {popularPosts.map((pposts, index) => {
                return (
                  <Popularposts key={index} pposts={pposts}></Popularposts>
                );
              })}
            </div>
           
          </div>
        </div>
    </>
  )
}

export default About