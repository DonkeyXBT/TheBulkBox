/* The community logo mark — cropped from the full logo (public/logo.png). */
export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img
      src="/images/mark.png"
      alt=""
      aria-hidden="true"
      className={`${className} object-contain`}
    />
  );
}
