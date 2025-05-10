import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <div id="main">
      <h2>{name}</h2>
      <h4>${price}</h4>
      <p id={`tour-item-para-${id}`}>
        {readMore ? info.slice(0, 200) + "..." : info}
        <br />
        <button id={`see-more-${id}`} onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show more" : "See less"}
        </button>

        <br />
        <img src={image} alt={name} />
        <h3>{price}</h3>
        <br />
        <button id={`delete-btn-${id}`} onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </p>
    </div>
  );
};

export default Tour;
