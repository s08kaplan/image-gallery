import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import "./MotionButton.css";

interface MotionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  variant?: "primary" | "secondary";
  classes?: string;
}

const MotionButton: FC<MotionButtonProps> = ({
  label,
  children,
  variant = "primary",
  classes = "",
  type = "button",
  style,
  ...rest
}) => {
  const content = label ?? children;
  const buttonClassName = [
    "motion-btn",
    variant === "secondary" ? "motion-btn--secondary" : "",
    classes,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={buttonClassName} style={style} {...rest}>
      <span className="motion-btn__circle" aria-hidden="true" />
      <span className="motion-btn__icon" aria-hidden="true">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
      <span className="motion-btn__label">{content}</span>
    </button>
  );
};

export default MotionButton;