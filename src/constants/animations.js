export const ANIMATIONS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  leftGrow: {
    hidden: { opacity: 0.5, width: 0 },
    visible: { opacity: 1, width: "100%" },
  },
  rightGrow: {
    hidden: { opacity: 0.5, scaleX: 0, transformOrigin: "right" },
    visible: { opacity: 1, scaleX: 1, transformOrigin: "right" },
  },
};
