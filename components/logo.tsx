export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Open box holding three cards */}
      <rect x="6" y="18" width="28" height="16" rx="3" fill="currentColor" />
      <rect
        x="11"
        y="8"
        width="8"
        height="12"
        rx="1.5"
        fill="currentColor"
        opacity="0.45"
        transform="rotate(-8 15 14)"
      />
      <rect
        x="16"
        y="6"
        width="8"
        height="13"
        rx="1.5"
        fill="currentColor"
        opacity="0.7"
      />
      <rect
        x="21"
        y="8"
        width="8"
        height="12"
        rx="1.5"
        fill="currentColor"
        opacity="0.45"
        transform="rotate(8 25 14)"
      />
    </svg>
  );
}
