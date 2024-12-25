import React, { useState } from 'react';
import StepsNav from './StepsNav';
import StepOne from './StepOne/StepOne';
import StepThree from './UploadImages/UploadImages';

const RegisterVendor = () => {
  const [activeStep, setActiveStep] = useState(1);

  const renderStep = () => {
    switch (activeStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepThree />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-200 rounded-md shadow-md">
      <h1 className="bg-green-600 text-white text-center text-xl font-semibold py-3 rounded-t-md">
        Create Your Restaurant Page
      </h1>
      <StepsNav activeStep={activeStep} setActiveStep={setActiveStep} />
      <div className="p-4 border-t border-gray-200">
        {renderStep()}
      </div>
    </div>
  );
};

export default RegisterVendor;
