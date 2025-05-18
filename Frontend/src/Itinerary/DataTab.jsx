import React from "react";
import ActivityCard from "./ActivityCard.jsx";

const DayTab = ({ day, activities, onAdd, onRemove }) => {
  return (
    <div className="day-tab">
      <h2>Plan for Day {day}</h2>
      <button className="add-btn" onClick={() => {
        const place = prompt("Enter activity (e.g., Visit Beach, Lunch at XYZ):");
        if (place) onAdd({ text: place });
      }}>
        + Add Activity
      </button>
      <div className="activity-list">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            index={index}
            activity={activity}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default DayTab;
