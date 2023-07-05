import React from "react";
import "./SeasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Let's stay at home!",
    iconName: "snowflake",
  },
};

const getSeason = (lat) => {
  const month = new Date().getMonth();
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat);
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`massive ${iconName} icon icon-left`} />
      <h1>{text}</h1>
      <i className={`massive ${iconName} icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
