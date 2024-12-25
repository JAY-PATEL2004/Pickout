import React, { useState } from 'react';

const DishSelection = ({ selectedCategories, selectedDishes, setSelectedDishes, nextStep, prevStep }) => {
  const [dishesByCategory, setDishesByCategory] = useState({
    Dosa: ['Masala Dosa', 'Paneer Dosa'],
    Burger: ['Aloo Tikki Burger', 'Cheese Burger'],
  });

  const [newDish, setNewDish] = useState({});

  // Toggle Dish Selection
  const toggleDish = (category, dish) => {
    setSelectedDishes((prev) => {
      const categoryDishes = prev[category] || [];
      return {
        ...prev,
        [category]: categoryDishes.includes(dish)
          ? categoryDishes.filter((d) => d !== dish)
          : [...categoryDishes, dish],
      };
    });
  };

  // Add New Dish
  const addDish = (category) => {
    const dish = newDish[category]?.trim();
    if (dish && !dishesByCategory[category]?.includes(dish)) {
      setDishesByCategory((prev) => ({
        ...prev,
        [category]: [...(prev[category] || []), dish],
      }));
      setNewDish((prev) => ({ ...prev, [category]: '' }));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Dishes</h2>
      {selectedCategories.map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{category}</h3>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {dishesByCategory[category]?.map((dish) => (
              <label key={dish} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={selectedDishes[category]?.includes(dish) || false}
                  onChange={() => toggleDish(category, dish)}
                  className="form-checkbox text-green-500"
                />
                <span>{dish}</span>
              </label>
            ))}
          </div>

          {/* Add New Dish */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newDish[category] || ''}
              onChange={(e) => setNewDish({ ...newDish, [category]: e.target.value })}
              placeholder="Add new dish"
              className="border rounded-md px-3 py-1"
            />
            <button
              onClick={() => addDish(category)}
              className="bg-green-500 text-white px-4 py-1 rounded-md"
            >
              Add Dish
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-md">Back</button>
        <button onClick={nextStep} className="px-4 py-2 bg-green-500 text-white rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default DishSelection;
