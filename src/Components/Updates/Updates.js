import React from "react";
import "./Updates.css";
import { UpdateData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdateData.map((update,id) => {
        return (
          <div className="update" key={id}>
            <img src={update.img} alt="img" />
            <div className="noti">
              <div style={{ marginBottom: "0.5rem" }}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
              <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
