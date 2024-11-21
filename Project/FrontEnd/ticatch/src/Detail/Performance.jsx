import React, { useState, useEffect } from "react";
import axios from "axios";

function Performance() {
  const [performance, setPerformance] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("/api/order")
      .then((response) => {
        console.log("API Response:", response.data); // 데이터 확인
        const firstPerformance = response.data[0]; // 첫 번째 데이터 선택
        setPerformance(firstPerformance);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setError("Performance not found");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!performance) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Performance Details</h1>
      <p>ID: {performance.performanceId || "N/A"}</p>
      <p>Price: {performance.price || "N/A"}</p>
      <p>Total Tickets: {performance.totalTicket || "N/A"}</p>
      <p>Remaining Seats: {performance.remainSeat || "N/A"}</p>
      <p>Place: {performance.place || "N/A"}</p>
      <p>
        View Date:{" "}
        {performance.viewDate
          ? new Date(performance.viewDate).toLocaleDateString()
          : "N/A"}
      </p>
      <p>View Time: {performance.viewTime || "N/A"}</p>
      <p>
        Start Date:{" "}
        {performance.startDate
          ? new Date(performance.startDate).toLocaleDateString()
          : "N/A"}
      </p>
      <p>
        End Date:{" "}
        {performance.endDate
          ? new Date(performance.endDate).toLocaleDateString()
          : "N/A"}
      </p>
    </div>
  );
}

export default Performance;
