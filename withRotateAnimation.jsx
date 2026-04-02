import { forwardRef } from "react";
import { motion } from "framer-motion";

export function withRotateAnimation(Component) {
  return forwardRef((props, ref) => {
    return (
      <motion.div
        ref={ref}
        animate={{ rotate: 90, x: 100 }}
        transition={{ duration: 1 }}
        style={{ display: "inline-block" }}
      >
        <Component {...props} />
      </motion.div>
    );
  });
}