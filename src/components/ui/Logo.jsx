import { useId } from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ className = '', showText = true }) {
  const gradientId = useId();

  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      {/* Sociovate mark: hub network — center node + orbiting connections, violet→cyan gradient */}
      <svg
        width="34"
        height="34"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="56" height="56" rx="16" fill={`url(#${gradientId})`} />
        <circle cx="32" cy="32" r="7" fill="#ffffff" />
        <circle cx="17" cy="19" r="4.5" fill="#ffffff" opacity="0.92" />
        <circle cx="47" cy="19" r="4.5" fill="#ffffff" opacity="0.92" />
        <circle cx="17" cy="45" r="4.5" fill="#ffffff" opacity="0.92" />
        <circle cx="47" cy="45" r="4.5" fill="#ffffff" opacity="0.92" />
        <path d="M20 22 L27 28" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round" opacity="0.85" />
        <path d="M44 22 L37 28" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round" opacity="0.85" />
        <path d="M20 42 L27 36" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round" opacity="0.85" />
        <path d="M44 42 L37 36" stroke="#ffffff" strokeWidth="2.25" strokeLinecap="round" opacity="0.85" />
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
        <span className="text-xl font-display font-bold gradient-text tracking-tight">
          Sociovate
        </span>
      )}
    </Link>
  );
}
