import * as React from "react";

type Props = {
  className?: string;
};

export default function InstagramIcon({ className = "w-6 h-6" }: Props) {
  // clean, lightweight Instagram glyph (stroke = currentColor)
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* outer rounded square */}
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      {/* lens */}
      <circle cx="12" cy="12" r="4" />
      {/* small dot */}
      <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}
