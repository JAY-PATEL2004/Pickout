import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation

const SelectedDishesDisplay = ({ selectedDishes }) => {
  const [expandedDish, setExpandedDish] = useState(null);
  const [dishDetails, setDishDetails] = useState({});
  const navigate = useNavigate();

  // Toggle expanded dish details
  const toggleDishDetails = (dish) => {
    setExpandedDish(expandedDish === dish ? null : dish);
  };

  // Add new ingredient to a dish
  const addIngredient = (dish) => {
    setDishDetails((prev) => ({
      ...prev,
      [dish]: {
        ...prev[dish],
        ingredients: [
          ...(prev[dish]?.ingredients || []),
          { name: '', percentage: '' },
        ],
      },
    }));
  };

  // Handle changes in dish details
  const handleDetailChange = (dish, field, value) => {
    setDishDetails((prev) => ({
      ...prev,
      [dish]: {
        ...prev[dish],
        [field]: value,
      },
    }));
  };

  // Handle variant selection
  const handleVariantSelection = (dish, selectedVariants) => {
    setDishDetails((prev) => ({
      ...prev,
      [dish]: {
        ...prev[dish],
        variants: selectedVariants.map((variant) => ({
          name: variant,
          price: prev[dish]?.variants?.find((v) => v.name === variant)?.price || '',
        })),
      },
    }));
  };

  // Handle variant price updates
  const handleVariantPriceChange = (dish, variantName, price) => {
    setDishDetails((prev) => ({
      ...prev,
      [dish]: {
        ...prev[dish],
        variants: prev[dish]?.variants.map((variant) =>
          variant.name === variantName ? { ...variant, price } : variant
        ),
      },
    }));
  };

  // Redirect to Summary Page
  const handleFinish = () => {
    // Add category information to each dish in dishDetails
    const menuItems = Object.entries(selectedDishes).reduce((acc, [category, dishes]) => {
      dishes.forEach((dish) => {
        acc[dish] = {
          ...dishDetails[dish],
          category,
        };
      });
      return acc;
    }, {});
  
    console.log(menuItems); // Verify the structure
    navigate('/MenuSummary', { state: { menuItems } });
  };
  

  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      {Object.entries(selectedDishes).map(([category, dishes]) => (
        <div key={category} className="mb-4">
          <h3 className="text-gray-500 font-bold mb-2">{category}</h3>
          {dishes.map((dish, index) => (
            <div key={index} className="bg-white border rounded-md p-2 mb-2">
              {/* Dish Header */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleDishDetails(dish)}
              >
                <span className="font-semibold">{dish}</span>
                <span className="text-gray-500">{expandedDish === dish ? '▲' : '▼'}</span>
              </div>

              {/* Dish Details */}
              {expandedDish === dish && (
                <div className="mt-2 p-2 bg-gray-50 rounded-md">
                  {/* Cooking Type */}
                  <input
                    type="text"
                    placeholder="Enter Cooking Type"
                    value={dishDetails[dish]?.cookingType || ''}
                    onChange={(e) => handleDetailChange(dish, 'cookingType', e.target.value)}
                    className="w-full border rounded-md px-2 py-1 mb-2"
                  />

                  {/* Description */}
                  <textarea
                    placeholder="Enter Description"
                    value={dishDetails[dish]?.description || ''}
                    onChange={(e) => handleDetailChange(dish, 'description', e.target.value)}
                    className="w-full border rounded-md px-2 py-1 mb-2"
                  />

                  {/* Veg/Non-Veg */}
                  <select
                    value={dishDetails[dish]?.type || ''}
                    onChange={(e) => handleDetailChange(dish, 'type', e.target.value)}
                    className="w-full border rounded-md px-2 py-1 mb-2"
                  >
                    <option value="">Veg / Non-Veg</option>
                    <option value="veg">Veg</option>
                    <option value="non-veg">Non-Veg</option>
                  </select>

                  {/* Multi-Select Variants */}
                  <h4 className="font-semibold mt-2">Select Variants:</h4>
                  <select
                    multiple
                    value={(dishDetails[dish]?.variants || []).map((v) => v.name)}
                    onChange={(e) =>
                      handleVariantSelection(dish, Array.from(e.target.selectedOptions, (opt) => opt.value))
                    }
                    className="w-full border rounded-md px-2 py-1 mb-2"
                  >
                    <option value="small">Small</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                  </select>

                  {/* Variant Prices */}
                  <h4 className="font-semibold mt-2">Set Prices for Variants:</h4>
                  {(dishDetails[dish]?.variants || []).map((variant, i) => (
                    <div key={i} className="flex space-x-2 mt-1 items-center">
                      <span className="w-1/3 font-medium">{variant.name}</span>
                      <input
                        type="number"
                        placeholder={`Price for ${variant.name}`}
                        value={variant.price || ''}
                        onChange={(e) => handleVariantPriceChange(dish, variant.name, e.target.value)}
                        className="border rounded-md px-2 py-1 w-2/3"
                      />
                    </div>
                  ))}

                  {/* Ingredients */}
                  <h4 className="font-semibold mt-2">Ingredients:</h4>
                  {(dishDetails[dish]?.ingredients || []).map((ingredient, i) => (
                    <div key={i} className="flex space-x-2 mt-1">
                      <input
                        type="text"
                        placeholder="Ingredient Name"
                        value={ingredient.name}
                        onChange={(e) => {
                          const updatedIngredients = [...(dishDetails[dish]?.ingredients || [])];
                          updatedIngredients[i].name = e.target.value;
                          handleDetailChange(dish, 'ingredients', updatedIngredients);
                        }}
                        className="border rounded-md px-2 py-1 w-1/2"
                      />
                      <input
                        type="text"
                        placeholder="Percentage"
                        value={ingredient.percentage}
                        onChange={(e) => {
                          const updatedIngredients = [...(dishDetails[dish]?.ingredients || [])];
                          updatedIngredients[i].percentage = e.target.value;
                          handleDetailChange(dish, 'ingredients', updatedIngredients);
                        }}
                        className="border rounded-md px-2 py-1 w-1/2"
                      />
                    </div>
                  ))}
                  <button
                    onClick={() => addIngredient(dish)}
                    className="mt-2 bg-green-500 text-white px-2 py-1 rounded-md"
                  >
                    Add Ingredient
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
      <button
        onClick={handleFinish}
        className="bg-blue-600 text-white px-6 py-2 rounded-md mt-4 hover:bg-blue-700"
      >
        Finish
      </button>
    </div>
  );
};

export default SelectedDishesDisplay;
