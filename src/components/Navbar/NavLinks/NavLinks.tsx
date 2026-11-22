import type { Dispatch, SetStateAction } from "react";
import type { NavItem } from "../types";
import DropdownMenu from "../Dropdown/DropdownMenu";
import "./NavLinks.css";

interface NavLinksProps {
  items: NavItem[];
  openDropdown: string | null;
  setOpenDropdown: Dispatch<SetStateAction<string | null>>;
  onNavigate: () => void;
}

export default function NavLinks({
  items,
  openDropdown,
  setOpenDropdown,
  onNavigate,
}: NavLinksProps) {
  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav aria-label="Primary navigation">
      <ul className="nav-links">
        {items.map((item) => {
          const hasChildren = Boolean(item.children && item.children.length > 0);
          const isOpen = openDropdown === item.label;

          return (
            <li
              key={item.label}
              className={`nav-links__item ${isOpen ? "nav-links__item--pinned" : ""}`}
            >
              {hasChildren && item.children ? (
                <>
                  <button
                    type="button"
                    className="nav-links__trigger"
                    aria-expanded={isOpen}
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    <span className="nav-links__chevron" aria-hidden="true">
                      ▾
                    </span>
                  </button>
                  <DropdownMenu
                    items={item.children}
                    onSelect={onNavigate}
                  />
                </>
              ) : (
                <a
                  href={item.href}
                  className="nav-links__link"
                  onClick={onNavigate}
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}