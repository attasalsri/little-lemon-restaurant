import React from 'react';
import './Menu.css';

const menuItems = [
  { 
    id: 1, 
    name: "Fresh Sushi Roll", 
    description: "Premium vinegared rice wrapped with fresh fish, crisp cucumber, and creamy avocado.", 
    price: "50$", 
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=200" // صورة بديلة
  },
  { 
    id: 2, 
    name: "Spaghetti Marinara", 
    description: "Tender spaghetti noodles served with our signature savory garlic and tomato sauce.", 
    price: "40$", 
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&auto=format&fit=crop", // صورة بديلة
  },
  { 
    id: 3, 
    name: "Avocado & Veggie Toast", 
    description: "Golden toasted sourdough topped with mashed avocado, crisp cherry tomatoes.", 
    price: "25$", 
    image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600", // صورة بديلة
  },
];

function Menu() {
  return (
    <div className="menu-container">
      {menuItems.map(item => (
        <div key={item.id} className="menu-card">
          <img src={item.image} alt={item.name} />
          <div className="menu-details">
            <h3>"{item.name}"</h3>
            <p>{item.description}</p>
          </div>
          <div className="menu-price">{item.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Menu;