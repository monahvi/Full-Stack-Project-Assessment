import React, { useState } from "react";
import "./CardItem.css";
import { FcLike, FcDislike } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";

const CardItem = ({ id, title, url, date, rating, onDelete }) => {
  const [currentRating, setCurrentRating] = useState(rating);
  const handleRateUp = () => {
    if (id) {
      setCurrentRating(currentRating + 1);
    }
  };
  const handleRateDown = () => {
    if (id && currentRating > 0) {
      setCurrentRating(currentRating - 1);
    }
  };
  const handleDeleteCard = () => {
    if (id) {
      onDelete(id);
    }
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${url.substring(
            url.indexOf("=") + 1
          )}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p>Rating: {currentRating}</p>
      <div className="card-date"></div>
      <div className="btn-group">
        <div className="rate-btn up" onClick={handleRateUp}>
          <FcLike size={32} />
        </div>
        <div className="rate-btn down" onClick={handleRateDown}>
          <FcDislike size={32} />
        </div>
        <div className="delete-btn" onClick={handleDeleteCard}>
          <MdDeleteOutline size={32} />
        </div>
      </div>
    </div>
  );
};
export default CardItem;
