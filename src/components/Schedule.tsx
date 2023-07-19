import React, { FC } from "react";
import "./Schedule.css";

type ScheduleData = {
  startTime: string;
  durationInMinutes: number;
};

const Schedule: FC<ScheduleData> = ({ startTime, durationInMinutes }) => {
  const startDate = new Date(startTime.substring(0, 16));
  const endDate = new Date(startDate.getTime() + durationInMinutes * 60000);
  const formattedStartTime = startDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  const formattedEndTime = endDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="schedule-container">
      <div className="box">
        <span>{formattedStartTime}</span>
      </div>
      <div className="box">
        <span>{formattedEndTime}</span>
      </div>
    </div>
  );
};

export default Schedule;
