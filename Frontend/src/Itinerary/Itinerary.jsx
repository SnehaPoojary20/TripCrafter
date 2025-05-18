import React, { useState } from "react";
import Planner from "./Planner";
import "./Itinerary.css";
import { format, addDays } from "date-fns";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ItineraryBoard = () => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [numDays, setNumDays] = useState(3);
  const [startDate, setStartDate] = useState(new Date());
  const [itinerary, setItinerary] = useState({
    1: [],
    2: [],
    3: [],
  });

  const addNewDay = () => {
    const newDay = numDays + 1;
    setNumDays(newDay);
    setItinerary((prev) => ({
      ...prev,
      [newDay]: [],
    }));
    setSelectedDay(newDay);
  };

  const getDateForDay = (dayOffset) => {
    const date = addDays(startDate, dayOffset - 1);
    return format(date, "MMM dd, yyyy");
  };

  return (
    <div className="itinerary-container">
      <div className="date-picker">
        <label htmlFor="start-date" style={{ marginRight: 10, fontWeight: "600" }}>
          Trip Start Date:
        </label>
        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="PPP"
          className="custom-datepicker"
        />
      </div>

      
      <div className="day-tabs">
        {[...Array(numDays)].map((_, i) => {
          const day = i + 1;
          return (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`tab ${selectedDay === day ? "active" : ""}`}
            >
              Day {day} - {getDateForDay(day)}
            </button>
          );
        })}
        <button className="add-day-btn" onClick={addNewDay}>
          + Add Day
        </button>
      </div>

      {/* Planner Component */}
      <Planner
        day={selectedDay}
        activities={itinerary[selectedDay] || []}
        onAddActivity={(activity) => {
          setItinerary((prev) => ({
            ...prev,
            [selectedDay]: [...(prev[selectedDay] || []), activity],
          }));
        }}
        onEditActivity={(index, updatedActivity) => {
          setItinerary((prev) => {
            const updatedDayActivities = [...(prev[selectedDay] || [])];
            updatedDayActivities[index] = updatedActivity;
            return {
              ...prev,
              [selectedDay]: updatedDayActivities,
            };
          });
        }}
        onRemoveActivity={(index) => {
          setItinerary((prev) => ({
            ...prev,
            [selectedDay]: prev[selectedDay].filter((_, i) => i !== index),
          }));
        }}
      />
    </div>
  );
};

export default ItineraryBoard;



