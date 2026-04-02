import { motion } from "framer-motion";
import "./StoryCarousel.css";

function StoryCarousel({ items = [] }) {
  // duplicate items to create a continuous loop effect
  const cards = [...items, ...items];

  return (
    <div className="story-carousel-wrapper" aria-hidden={false}>
      <motion.div
        className="story-carousel"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {cards.map((item, idx) => (
          <div
            className="carousel-card"
            key={idx}
            style={item.image ? { backgroundImage: `url(${item.image})` } : {}}
            role="img"
            aria-label={item.title}
          >
            <div className="card-deco" aria-hidden="true" />
            <div className="card-overlay" aria-hidden="true" />
            <div className="card-content">
              <div className="card-icon" aria-hidden="true">✓</div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-sub">{item.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default StoryCarousel;
