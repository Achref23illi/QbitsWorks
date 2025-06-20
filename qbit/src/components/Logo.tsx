import React from 'react';
import { useThemeContext } from '../hooks/useThemeContext';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  const { theme } = useThemeContext();
  
  const logoSrc = theme === 'dark' ? '/logo_white_mode.svg' : '/logo_dark_mode.svg';
  
  return (
    <img 
      src={logoSrc} 
      alt="Qbit Logo" 
      className={className}
    />
  );
};

export default Logo;
