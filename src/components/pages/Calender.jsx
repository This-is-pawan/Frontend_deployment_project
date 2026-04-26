import React, { useState } from "react";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  // Get values
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Change month
  const nextMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1));
  };

  // Days in month
  const daysInMonth = new Date(year, date.getMonth() + 1, 0).getDate();

  const days = [...Array(daysInMonth).keys()];


  return (
    <div className="w-64 p-3 border rounded-md text-center">

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <button onClick={prevMonth}>⬅</button>
        <h2 className="font-semibold">{month} {year}</h2>
        <button onClick={nextMonth}>➡</button>
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 text-sm">
        {days.map((d) => (
          <div key={d} className="p-1 bg-gray-100 rounded">
            {d + 1}
          </div>
        ))}
      </div>

    </div>
  );
};

export default Calendar;