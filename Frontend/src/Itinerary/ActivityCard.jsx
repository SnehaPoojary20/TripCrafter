import React from "react";
import { FaUtensils, FaBus, FaMapMarkerAlt, FaTrash } from "react-icons/fa";

const ActivityCard = ({ activity, index, onRemove }) => {
  const getIcon = () => {
    const text = activity.text.toLowerCase();
    if (text.includes("lunch") || text.includes("dinner")) return <FaUtensils />;
    if (text.includes("bus") || text.includes("travel")) return <FaBus />;
    return <FaMapMarkerAlt />;
  };

  return (
    <div className="activity-card">
      <span className="icon">{getIcon()}</span>
      <span className="text">{activity.text}</span>
      <button className="remove-btn" onClick={() => onRemove(index)}><FaTrash /></button>
    </div>
  );
};

export default ActivityCard;
