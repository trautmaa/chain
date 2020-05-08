import React from "react";
import rosters from "../assets/rosters.json";
import "./rosters.scss";

const Rosters = () => {
  const sortYears = (a: string, b: string) => {
    return (Number(a) > Number(b) && -1) || 1;
  };

  return (
    <div className="rosters-page">
      {Object.keys(rosters)
        .sort(sortYears)
        .map((year) => (
          <div className="roster-section">
            <h2>{year}</h2>
            <ul>
              {rosters[year as keyof typeof rosters].map((player) => (
                <li>{player}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Rosters;
