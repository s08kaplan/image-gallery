import "./HamburgerButton.css";

interface HamburgerButtonProps {
  htmlFor: string;
}

export default function HamburgerButton({ htmlFor }: HamburgerButtonProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="hamburger"
      aria-label="Toggle navigation menu"
    >
      <span className="hamburger__line" />
      <span className="hamburger__line" />
      <span className="hamburger__line" />
    </label>
  );
}