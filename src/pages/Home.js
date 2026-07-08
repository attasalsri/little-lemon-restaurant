import React from "react";
import "./Home.css";

function Home() {
  const dishes = [
    {
      id: 1,
      title: '"Fresh Sushi Roll"',
      description:
        "Premium vinegared rice wrapped with fresh fish, crisp cucumber, and creamy avocado. A perfect balance of textures.",
      image:
        "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      title: '"Spaghetti Marinara"',
      description:
        "Tender spaghetti noodles served with our signature savory garlic and tomato sauce, drizzled with premium olive oil.",
      image:
        "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=400&auto=format&fit=crop",
    },

    {
      id: 3,
      title: '"Avocado & Veggie Toast"',
      description:
        "Golden toasted sourdough topped with mashed avocado, crisp cherry tomatoes, cucumbers, and a drizzle of premium olive oil.",
      // رابط مباشر وصريح لتوست الأفوكادو من خادم خارجي مستقل تماماً:
      image:
        "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="home-page">
      {/* قسم الـ Hero الترحيبي */}
      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-card">
            <span className="hero-logo-icon">🍋</span>
            <h1 className="hero-title">LITTLE LEMON</h1>
            <p className="hero-description">
              "Authentic Mediterranean flavors with a modern twist. Fresh
              ingredients, family recipes, and a cozy atmosphere."
            </p>
          </div>
        </div>
      </section>

      {/* قسم الأطباق المميزة (Signature Dishes) */}
      <section className="dishes-section">
        <div className="dishes-header-container">
          <button className="signature-btn">
            Some of Our Signature Dishes
          </button>
        </div>

        {/* شبكة البطاقات المتجاوبة */}
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <div key={dish.id} className="dish-card">
              <div className="dish-image-wrapper">
                <img src={dish.image} alt={dish.title} className="dish-image" />
              </div>
              <div className="dish-info">
                <h3 className="dish-title">{dish.title}</h3>
                <p className="dish-text">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
