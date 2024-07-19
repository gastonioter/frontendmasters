/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState } from "react";

export default function Carousel({ images }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="carousel">
      <img src={images[current]} alt="animal hero" />
      <div className="carousel-smaller">
        {images.map((img, idx) => (
          <img
            src={img}
            data-id={idx}
            onClick={(e) => setCurrent(e.target.dataset.id)}
            key={img}
            alt="animal"
            className={current == idx ? "active" : ""}
          />
        ))}
      </div>
    </div>
  );
}
