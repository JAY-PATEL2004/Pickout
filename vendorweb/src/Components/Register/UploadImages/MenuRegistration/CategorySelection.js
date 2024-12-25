import React, { useState } from 'react';

const CategorySelection = ({ selectedCategories, setSelectedCategories, nextStep }) => {
  const [categories, setCategories] = useState(['Dosa', 'Burger']);
  const [newCategory, setNewCategory] = useState('');

  // Toggle Category Selection
  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Add New Category
  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory)) {
      setCategories((prev) => [...prev, newCategory.trim()]);
      setNewCategory('');
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Select Categories</h2>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <label key={category} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => toggleCategory(category)}
              className="form-checkbox text-green-500"
            />
            <span>{category}</span>
          </label>
        ))}
      </div>

      {/* Add New Category */}
      <div className="mt-6 flex items-center space-x-2">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add new category"
          className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={addCategory}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Add
        </button>
      </div>

      {/* Next Button */}
      <button
        onClick={nextStep}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md"
        disabled={selectedCategories.length === 0}
      >
        Next
      </button>
    </div>
  );
};

export default CategorySelection;
