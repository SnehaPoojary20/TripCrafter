import React, { useState } from "react";
import './Planner.css';

const Planner = ({ day, activities, onAddActivity, onRemoveActivity }) => {
  const [newActivity, setNewActivity] = useState("");

  const handleAdd = () => {
    const trimmed = newActivity.trim();
    if (trimmed) {
      onAddActivity(trimmed);
      setNewActivity("");
    }
  };

  return (
    <div className="planner-container">
      <h3>Day {day} Activities</h3>
      <ul>
        {activities.length === 0 ? (
          <li>No activities added yet.</li>
        ) : (
          activities.map((activity, index) => (
            <li key={index} className="activity-item">
              {activity}
              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => onRemoveActivity(index)}
              >
                Remove
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="add-activity mt-3">
        <input
          type="text"
          className="form-control mb-2"
          value={newActivity}
          onChange={(e) => setNewActivity(e.target.value)}
          placeholder="Add an activity"
        />
        <button className="btn btn-primary" onClick={handleAdd}>
          Add Activity
        </button>
      </div>
    </div>
  );
};

export default Planner;

