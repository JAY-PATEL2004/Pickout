import React, { useState } from "react";
import "./Menu.css"; // Import CSS for flip effect
import burgericon from "../Home/images/Burger.png";
import sandwich from "../Home/images/Sandwich.png";
import dosa from "../Home/images/dosa.png";

const Menu = () => {
  const [flippedCategory, setFlippedCategory] = useState(null);

  const menuItems = [
    {
      category: "Burgers",
      image: burgericon,
      dishes: [
        {
          name: "Cheese Burger",
          image: "cheese-burger.jpg",
          price: "$5.99",
          rating: 4.5,
        },
        {
          name: "Aloo Tikki Burger",
          image: "aloo-tikki-burger.jpg",
          price: "$4.99",
          rating: 4.0,
        },
        {
          name: "Chicken Burger",
          image: "chicken-burger.jpg",
          price: "$6.49",
          rating: 4.8,
        },
        {
          name: "Veg Burger",
          image: "veg-burger.jpg",
          price: "$5.49",
          rating: 4.2,
        },
        {
          name: "Double Cheese Burger",
          image: "double-cheese-burger.jpg",
          price: "$7.99",
          rating: 4.6,
        },
      ],
    },
    {
    category: "Burgers",
      image: burgericon,
      dishes: [
        {
          name: "Cheese Burger",
          image: "cheese-burger.jpg",
          price: "$5.99",
          rating: 4.5,
        },
        {
          name: "Aloo Tikki Burger",
          image: "aloo-tikki-burger.jpg",
          price: "$4.99",
          rating: 4.0,
        },
        {
          name: "Chicken Burger",
          image: "chicken-burger.jpg",
          price: "$6.49",
          rating: 4.8,
        },
        {
          name: "Veg Burger",
          image: "veg-burger.jpg",
          price: "$5.49",
          rating: 4.2,
        },
        {
          name: "Double Cheese Burger",
          image: "double-cheese-burger.jpg",
          price: "$7.99",
          rating: 4.6,
        },
      ],
    },
    {
      category: "Sandwiches",
      image: sandwich,
      dishes: [
        {
          name: "Grilled Sandwich",
          image: "grilled-sandwich.jpg",
          price: "$3.99",
          rating: 4.2,
        },
        {
          name: "Veg Sandwich",
          image: "veg-sandwich.jpg",
          price: "$3.49",
          rating: 4.0,
        },
        {
          name: "Cheese Sandwich",
          image: "cheese-sandwich.jpg",
          price: "$4.29",
          rating: 4.3,
        },
        {
          name: "Paneer Sandwich",
          image: "paneer-sandwich.jpg",
          price: "$4.99",
          rating: 4.5,
        },
        {
          name: "Club Sandwich",
          image: "club-sandwich.jpg",
          price: "$5.29",
          rating: 4.7,
        },
      ],
    },
    {
      category: "Dosa",
      image: dosa,
      dishes: [
        {
          name: "Plain Dosa",
          image: "plain-dosa.jpg",
          price: "$2.99",
          rating: 4.1,
        },
        {
          name: "Masala Dosa",
          image: "masala-dosa.jpg",
          price: "$3.49",
          rating: 4.6,
        },
        {
          name: "Cheese Dosa",
          image: "cheese-dosa.jpg",
          price: "$3.99",
          rating: 4.3,
        },
        {
          name: "Sada Dosa",
          image: "sada-dosa.jpg",
          price: "$3.29",
          rating: 4.4,
        },
        {
          name: "Rava Dosa",
          image: "rava-dosa.jpg",
          price: "$3.79",
          rating: 4.5,
        },
      ],
    },
    {
      category: "Pizza",
      image: "pizza-image.jpg",
      dishes: [
        {
          name: "Margherita",
          image: "margherita-pizza.jpg",
          price: "$7.99",
          rating: 4.7,
        },
        {
          name: "Pepperoni",
          image: "pepperoni-pizza.jpg",
          price: "$8.49",
          rating: 4.8,
        },
        {
          name: "Veggie Pizza",
          image: "veggie-pizza.jpg",
          price: "$7.49",
          rating: 4.5,
        },
        {
          name: "BBQ Chicken",
          image: "bbq-chicken-pizza.jpg",
          price: "$9.49",
          rating: 4.7,
        },
        {
          name: "Hawaiian",
          image: "hawaiian-pizza.jpg",
          price: "$8.29",
          rating: 4.4,
        },
      ],
    },
  ];

  const handleCardClick = (index) => {
    if (flippedCategory === index) {
      setFlippedCategory(null); // Unflip if the same category is clicked again
    } else {
      setFlippedCategory(index); // Flip the clicked card
    }
  };

  const handleAddToCart = (dishName) => {
    alert(`${dishName} added to cart!`);
  };

  return (
    <div className="flex justify-center gap-8 mt-6 flex-wrap">
      <h2 className="text-green-500 text-2xl font-bold mb-4 w-full text-center">
        Menu
      </h2>

      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`menu-card ${flippedCategory === index ? "flipped" : ""}`}
          onClick={() => handleCardClick(index)}
        >
          <div className="menu-card-front">
            <img
              src={item.image}
              alt={item.category}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-center mt-4 text-xl font-semibold">{item.category}</h3>
          </div>
          <div className="menu-card-back">
            <div className="carousel-container">
              <div className="carousel-slide">
                {item.dishes.map((dish, idx) => (
                  <div key={idx} className="dish-item">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-12 h-12 object-cover rounded-full mr-3"
                    />
                    <div>
                      <div className="text-lg font-semibold">
                        {dish.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        Rating: {dish.rating}⭐
                      </div>
                      <div className="text-sm text-green-500">
                        {dish.price}
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(dish.name)}
                      className="bg-green-500 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
