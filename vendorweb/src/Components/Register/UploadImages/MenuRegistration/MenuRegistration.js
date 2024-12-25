import React, { useState } from 'react';
import CategorySelection from './CategorySelection';
import DishSelection from './DishSelection';
import ReviewSelection from './ReviewSelectio';

const MenuTabs = () => {
  const [step, setStep] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDishes, setSelectedDishes] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="w-full max-w-3xl mx-auto bg-white p-2 rounded-lg">
      {/* Tab Navigation */}
      <div className="flex space-x- mb-6 border-b-2 border-black">
        <button
          onClick={() => setStep(1)}
          className={` px-2 text-lg font-medium rounded-t-md ${step === 1 ? ' text-green-500' : 'text-gray-600 hover:text-green-500'}`}
        >
          Select Categories
        </button>
        <button
          onClick={() => setStep(2)}
          className={`py-2 px-4 text-lg font-medium rounded-t-md ${step === 2 ? ' text-green-500' : 'text-gray-600 hover:text-green-500'}`}
          disabled={selectedCategories.length === 0}
        >
          Select Dishes
        </button>
        <button
          onClick={() => setStep(3)}
          className={`py-2 px-4 text-lg font-medium rounded-t-md ${step === 3 ? ' text-green-500' : 'text-gray-600 hover:text-green-500'}`}
          disabled={Object.keys(selectedDishes).length === 0}
        >
          Review Selection
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {step === 1 && (
          <CategorySelection
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <DishSelection
            selectedCategories={selectedCategories}
            selectedDishes={selectedDishes}
            setSelectedDishes={setSelectedDishes}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <ReviewSelection
            selectedCategories={selectedCategories}
            selectedDishes={selectedDishes}
            prevStep={prevStep}
          />
        )}
      </div>
    </div>
  );
};

export default MenuTabs;
