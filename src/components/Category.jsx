import React from "react";
import { Link } from "react-router-dom";


function Category({details}) {
  
  
  function handleClick(){
    
    // console.log(formattedCategory);
  }

  return (

    <>
      
      <div className="col-md-2 mt-5 mb-5 category">
      <Link to={`/categoryblogposts/${details.category}`} onClick={handleClick}>
        <img src={`${details.image}`} style={{width:"250px", height: "250px"}} className="card-img-top" alt="..." />
        </Link>
      </div>
    </>

  );
}

export default Category;
