import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <p>{name}</p>
      <p>
        {readMore ? info : info.slice(0, 200) + "..."}
        <br />
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "See less" : "Show more"}
        </button>

        <br />
        <img src={image} />
        <h3>{price}</h3>
        <br />
        <button onClick={() => removeTour(id)}>delete</button>
      </p>
    </div>
  );
};

export default Tour;
