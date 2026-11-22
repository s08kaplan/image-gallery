import type { NavItem } from "../types";
import "./MobileDrawer.css";

interface MobileDrawerProps {
  drawerId: string;
  items: NavItem[];
  onClose: () => void;
}

export default function MobileDrawer({ drawerId, items, onClose }: MobileDrawerProps) {
  return (
    <>
      <label
        htmlFor={drawerId}
        className="mobile-backdrop"
        aria-hidden="true"
      />
      <aside className="mobile-drawer" aria-label="Mobile navigation">
        <ul className="mobile-drawer__list">
          {items.map((item) => (
            <li key={item.label} className="mobile-drawer__group">
              <a
                href={item.href}
                className="mobile-drawer__link"
                onClick={onClose}
              >
                {item.label}
              </a>
              {item.children && (
                <ul className="mobile-drawer__sublist">
                  {item.children.map((sub) => (
                    <li key={sub.label}>
                      <a
                        href={sub.href}
                        className="mobile-drawer__sublink"
                        onClick={onClose}
                      >
                        {sub.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

       {/*  <a
          href="#get-started"
          className="mobile-drawer__cta"
          onClick={onClose}
        >
          Get Started
        </a> */}
      </aside>
    </>
  );
}