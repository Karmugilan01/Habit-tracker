import React, { useState } from "react";

const App = () => {
  const tasks = [
    "Drink 2 litre of water",
    "Study 4 hours",
    "Practice aptitude",
    "Play 2 hours"
  ];

  // track checked state for each task
  const [checked, setChecked] = useState([false, false, false, false]);

  const total = tasks.length;
  const completed = checked.filter(Boolean).length;
  const percentage = Math.round((completed / total) * 100);

  const toggleTask = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  const resetDay = () => {
    setChecked(new Array(total).fill(false));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center w-[420px] border-4 bg-green-100 border-green-600 rounded-lg p-5">

        {/* Title */}
        <div className="text-black text-xl font-bold mt-2">
          DAILY HABIT TRACKER
        </div>

        {/* Progress Section */}
        <div className="bg-white w-full rounded-lg mt-5 flex flex-col items-center p-4">
          <div className="font-semibold">Today's Progress</div>
          <div className="text-sm mt-1">
            Completed: {completed}/{total}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 bg-gray-300 rounded-lg mt-3 overflow-hidden">
            <div
              className="h-full bg-green-600 rounded-lg transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Habits */}
        <div className="font-semibold mt-5">Daily Habits</div>

        <div className="mb-5 w-full">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-white rounded-lg shadow my-2"
            >
              <input
                type="checkbox"
                checked={checked[index]}
                onChange={() => toggleTask(index)}
                className="w-5 h-5 accent-green-600"
              />
              <label className="text-sm font-medium text-gray-900">
                {task}
              </label>
            </div>
          ))}
        </div>

        {/* Reset Button */}
        <button
          onClick={resetDay}
          className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition"
        >
          Reset Day
        </button>

      </div>
    </div>
  );
};

export default App;
