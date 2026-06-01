/**
 * Icon Configuration
 * Centralized icon sizing and animation settings for consistency
 */

export const ICON_CONFIG = {
  // Base sizes (in pixels)
  sizes: {
    xs: 16,
    sm: 18,
    base: 20,
    md: 24,
    lg: 28,
    xl: 32,
    '2xl': 40,
  },
  // Stroke width for consistent visual weight
  strokeWidth: {
    default: 2,
    thin: 1.5,
    bold: 2.5,
  },
  // Animation classes
  animations: {
    hover: 'icon-hover',
    pulse: 'icon-pulse',
    bounce: 'icon-bounce',
  },
};

// Icon size mapping for different use cases
export const ICON_SIZES = {
  // Navbar
  navbar: 'base',
  
  // Navigation/Buttons
  buttonIcon: 'sm',
  
  // Section icons (Services, etc)
  sectionIcon: 'lg',
  
  // Social icons
  socialIcon: 'md',
  
  // Form icons
  formIcon: 'sm',
  
  // Footer icons
  footerIcon: 'base',
};
