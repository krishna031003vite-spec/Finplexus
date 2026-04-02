import { motion, useTransform } from "framer-motion";
import "./StoryBlock.css";

function StoryBlock({
  title,
  description,
  index,
  direction,
  scrollProgress,
  rangeStart,
  rangeEnd,
}) {
  // Each block slides + fades in during its own scroll band
  const opacity = useTransform(scrollProgress, [rangeStart, rangeEnd], [0, 1]);

  const x = useTransform(
    scrollProgress,
    [rangeStart, rangeEnd],
    [direction === "left" ? -80 : 80, 0]
  );

  const y = useTransform(scrollProgress, [rangeStart, rangeEnd], [30, 0]);

  const scale = useTransform(scrollProgress, [rangeStart, rangeEnd], [0.92, 1]);

  // Number badge: pops in slightly after the card
  const numStart = rangeStart + 0.04;
  const numEnd = rangeEnd + 0.04;
  const numberOpacity = useTransform(scrollProgress, [numStart, numEnd], [0, 1]);
  const numberScale = useTransform(scrollProgress, [numStart, numEnd], [0.4, 1]);
  const numberRotate = useTransform(scrollProgress, [numStart, numEnd], [-20, 0]);

  // Text content fades in last
  const textStart = rangeStart + 0.07;
  const textEnd = rangeEnd + 0.07;
  const textOpacity = useTransform(scrollProgress, [textStart, textEnd], [0, 1]);
  const textY = useTransform(scrollProgress, [textStart, textEnd], [14, 0]);

  return (
    <motion.div
      className="story-block"
      style={{ opacity, x, y, scale }}
    >
      <motion.div
        className="story-number"
        style={{
          opacity: numberOpacity,
          scale: numberScale,
          rotate: numberRotate,
        }}
      >
        {index}
      </motion.div>

      <motion.div
        className="story-content"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </motion.div>
    </motion.div>
  );
}

export default StoryBlock;