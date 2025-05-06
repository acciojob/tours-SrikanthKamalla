import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);

  return (
    <div>
      <h2>{name}</h2>
      <h4>${price}</h4>
      <p>
        {readMore ? info.slice(0, 200) + "..." : info}
        <br />
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show more" : "See less"}
        </button>

        <br />
        <img src={image} alt={name} />
        <h3>{price}</h3>
        <br />
        <button onClick={() => removeTour(id)}>Not Interested</button>
      </p>
    </div>
  );
};

export default Tour;
