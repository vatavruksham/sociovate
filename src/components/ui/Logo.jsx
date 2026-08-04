import { useId } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  const gradientId = useId();

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="48" height="48" rx="14" fill={`url(#${gradientId})`}/>
        <circle cx="32" cy="32" r="6" fill="#fff"/>
        <circle cx="18" cy="20" r="4" fill="#fff" opacity="0.9"/>
        <circle cx="46" cy="20" r="4" fill="#fff" opacity="0.9"/>
        <circle cx="32" cy="46" r="4" fill="#fff" opacity="0.9"/>
        <path d="M21 23l7 6M43 23l-7 6M32 38v4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" opacity="0.85"/>

        <defs>
          <linearGradient
            id={gradientId}
            x1="8"
            y1="8"
            x2="56"
            y2="56"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#7c3aed" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className="text-xl font-display font-semibold tracking-tight text-ink">
          Sociovate
        </span>
      )}
    </Link>
  );
}
