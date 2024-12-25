import React from 'react';

const StepsNav = ({ activeStep, setActiveStep }) => {
  const steps = [
    { id: 1, label: 'Restaurant Information' },
   
    { id: 2, label: 'Upload Images' },
  ];

  return (
    <div className="flex justify-around border-b border-gray-200 bg-gray-50">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`cursor-pointer text-center py-3 px-4 flex-1 ${
            activeStep === step.id
              ? 'bg-green-600 text-white font-medium'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
          onClick={() => setActiveStep(step.id)}
        >
          {step.id}. {step.label}
        </div>
      ))}
    </div>
  );
};

export default StepsNav;
