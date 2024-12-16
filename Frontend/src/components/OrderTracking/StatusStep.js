import React from "react";

const StatusStep = ({ step, time, eta, active }) => {
  return (
    <div className="flex items-center gap-4 py-2">
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full border ${
          active ? "bg-green-500 text-white" : "border-gray-400"
        }`}
      >
        {active ? (
          <span>&#10003;</span> // Checkmark icon
        ) : (
          <span className="text-gray-400">&bull;</span>
        )}
      </div>
      <div>
        <div
          className={`font-medium ${
            active ? "text-green-600" : "text-gray-800"
          }`}
        >
          {step}
        </div>
        <div className="text-sm text-gray-500">{time || eta}</div>
      </div>
    </div>
  );
};

export default StatusStep;
