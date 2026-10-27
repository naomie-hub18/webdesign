"use client";

import { useState } from "react";

const products = [
  { id: 1, name: "Dewy Face Cream", price: 28, category: "Face care", image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&q=80" },
  { id: 2, name: "Nourishing Body Oil", price: 24, category: "Body care", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80" },
  { id: 3, name: "Daily Hydrating Moisturizer", price: 32, category: "Hydration", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80" },
  { id: 4, name: "Mineral Glow SPF 50", price: 30, category: "Sun protection", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&q=80" }
];

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((count) => count + 1);
  }

  return (
    <main>
      <nav className="nav container">
        <a className="brand" href="#top">Luma<span>.</span></a>
        <button className="cart" onClick={() => alert(`You have ${cartCount} item(s) in your cart.`)}>
          Cart <span className="cart-count">{cartCount}</span>
        </button>
      </nav>

      <section className="hero container" id="top">
        <p className="eyebrow">Simple skincare · 2026</p>
        <h1>Healthy skin,<br /><em>beautifully cared for.</em></h1>
        <p className="intro">Gentle, everyday skincare essentials made to nourish, hydrate, and protect your skin.</p>
      </section>

      <section className="products container" aria-labelledby="products-heading">
        <div className="section-heading"><h2 id="products-heading">Featured products</h2><span>{products.length} items</span></div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="card" key={product.id}>
              <div className="image-wrap"><img src={product.image} alt={product.name} /></div>
              <div className="card-info"><p className="category">{product.category}</p><h3>{product.name}</h3><div className="card-bottom"><strong>${product.price}</strong><button onClick={addToCart}>Add to cart</button></div></div>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer container"><p>© 2026 Luma Store</p><p>Made for Week 2 assignment</p></footer>
    </main>
  );
}
