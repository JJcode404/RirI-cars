// Shared animation config — import in any component that uses Motion

export const ease = [0.22, 1, 0.36, 1] // ease-out-expo: decisive, premium

// Fade + lift — most common entrance
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

// Pure fade (no movement)
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}
