import React, { useState } from 'react';

interface LogoProps {
  variant?: 'full' | 'emblem';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export const CLINIC_LOGO_URL = 'https://t3.ftcdn.net/jpg/03/04/90/28/360_F_304902822_RhvrRzzXR15rCfXfIjlNdOd0nwVX1iwI.jpg';
export const CLINIC_LOGO_LOCAL = '/clinic-logo.jpg';

export const LogoEmblem: React.FC<{ size?: number; className?: string }> = ({
  size = 48,
  className = '',
}) => {
  const [imgSrc, setImgSrc] = useState(CLINIC_LOGO_URL);

  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative shrink-0 rounded-full overflow-hidden bg-white shadow-xs border border-[#C5B27A]/40 flex items-center justify-center p-0.5 ${className}`}
    >
      <img
        src={imgSrc}
        alt="Dr. Rana Fida Hussain Physiotherapy Clinic Logo"
        onError={() => setImgSrc(CLINIC_LOGO_LOCAL)}
        className="w-full h-full object-cover rounded-full select-none"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'light',
  size = 'md',
  className = '',
  onClick,
}) => {
  const emblemSizes = {
    sm: 36,
    md: 46,
    lg: 56,
    xl: 72,
  };

  const isDark = theme === 'dark';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 cursor-pointer select-none group transition-opacity hover:opacity-95 ${className}`}
      role="banner"
      aria-label="Dr. Rana Fida Hussain Physiotherapy Clinic"
    >
      <LogoEmblem size={emblemSizes[size]} />

      {variant === 'full' && (
        <div className="flex flex-col leading-tight text-left">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-serif tracking-wide font-semibold uppercase transition-colors ${
                isDark ? 'text-white' : 'text-[#243442]'
              } ${
                size === 'sm'
                  ? 'text-sm'
                  : size === 'lg'
                  ? 'text-lg md:text-xl'
                  : size === 'xl'
                  ? 'text-xl md:text-2xl'
                  : 'text-sm md:text-base'
              }`}
            >
              Dr. Rana Fida Hussain
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-medium ${
                isDark ? 'text-[#C5B27A]' : 'text-[#C5B27A]'
              }`}
            >
              Physiotherapy Clinic
            </span>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-[#A7A9AA]/50" />
            <span
              className={`hidden sm:inline-block text-[10px] tracking-wider uppercase font-medium ${
                isDark ? 'text-[#A7A9AA]' : 'text-[#344452]'
              }`}
            >
              Consultant Physiotherapist
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
